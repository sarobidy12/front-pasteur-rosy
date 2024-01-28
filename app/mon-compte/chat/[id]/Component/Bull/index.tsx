import React from "react";
import styles from "./style.module.css";
import Image from "next/image";
import moment from "moment";

interface ChatMessageProps {
  avatarSrc: string;
  userName: string;
  messageText: string;
  isCurrentUser?: boolean;
  date: Date;
}

const ChatMessage: React.FC<ChatMessageProps> = ({
  avatarSrc,
  userName,
  messageText,
  isCurrentUser = false,
  date,
}) => {
  return (
    <div
      className={`${styles.chatMessage} ${
        isCurrentUser ? styles.currentUser : ""
      }`}
    >
      <div>
        {avatarSrc.includes("File") ? (
          <Image src={avatarSrc} width={25} height={25} alt={userName} />
        ) : (
          <span className="material-symbols-outlined">person</span>
        )}
      </div>
      <div className={styles.messageContent}>
        <p
          className={`${styles.messageText} ${
            isCurrentUser ? styles.curentMessageText : ""
          }`}
        >
          {messageText}
        </p>

        <div
          className={`space-between-center ${
            !isCurrentUser ? styles.currentUser : ""
          }`}
        >
          <p className={styles.userName}>{moment(date).fromNow()}</p>
          <p className={styles.userName}>{userName}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
