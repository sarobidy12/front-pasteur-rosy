import { FC, useRef, useEffect, useState } from "react";
import useMessage from "@/app/Store/Message";
import style from "../style.module.css";
import useUser from "@/app/Store/User";
import { img } from "@/app/Utils/img";
import Bull from "./Bull";
import { urlApi } from "@/app/Utils/api";

interface Props {
  canal: string;
}

const ListMessage: FC<Props> = ({ canal }) => {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);

  const { listMessage, setListMessage } = useMessage();
  const { info } = useUser();

  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const handlePage = () => setLoading(true);

  const getLastedMessage = async () => {
    try {
      const current = await fetch(
        `${urlApi}/chat/convesation?canal=${canal}&page=${page + 1}`
      ).then((res) => res.json());

      if (!current.length) {
        if (page > 1) {
          setPage(page - 1);
        }
      } else {
        setPage(page + 1);
      }

      setListMessage([...current, ...listMessage]);
    } catch (err) {
      console.error("err", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (loading) {
      getLastedMessage();
    }
  }, [loading]);

  useEffect(() => {
    // Scroll down to the bottom when messages change
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTo(
        0,
        messagesContainerRef.current.scrollHeight * 5
      );
    }
  }, [listMessage.length]);

  return (
    <div>
      <div className={style.messageContent} ref={messagesContainerRef}>
        <div className={style.getLastedMessage}>
          {loading ? (
            <div className={style.loading} >Veuillez patienter...</div>
          ) : (
            <>
              {listMessage.length > 1 && (
                <button onClick={handlePage}>Voir les derniers message</button>
              )}
            </>
          )}
        </div>
        {listMessage.map((x: any, index: number) => (
          <Bull
            key={index}
            avatarSrc={x.user?.img ? img(x.user?.img) : ""}
            userName={`${x?.user?.firstName || ""} ${x.user?.lastName || ""}`}
            messageText={x.message}
            isCurrentUser={x?.user?._id === info._id}
            date={x.createdAt}
          />
        ))}
      </div>
    </div>
  );
};

export default ListMessage;
