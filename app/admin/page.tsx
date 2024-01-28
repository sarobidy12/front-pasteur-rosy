import React from "react";
import style from "./admin.module.css";
import Card from "@/app/admin/Component/Card/Module";

const Admin = () => {
  return (
    <div className={style.container}>
      <h1 className={style.logoAdmin}>
        <span className="material-symbols-outlined">admin_panel_settings</span>
      </h1>
      <h2 className={style.title}>Administration des contenues.</h2>
      <div className="grid">
        <Card
          icon={<span className="material-symbols-outlined">image</span>}
          title="Photo"
          description="L'administration des photos peut également concerner le partage d'images avec d'autres personnes, que ce soit par le biais de réseaux sociaux, de plateformes de partage de photos ou par des moyens plus traditionnels."
          href="/admin/photos"
        />
        <Card
          icon={<span className="material-symbols-outlined">folder_copy</span>}
          title="Categorie"
          description="L'administration des photos peut également concerner le partage d'images avec d'autres personnes, que ce soit par le biais de réseaux sociaux, de plateformes de partage de photos ou par des moyens plus traditionnels."
          href="/admin/categorie"
        />
        <Card
          icon={
            <span className="material-symbols-outlined">military_tech</span>
          }
          title="Chretient qui fait des explois"
          description="L'administration des photos peut également concerner le partage d'images avec d'autres personnes, que ce soit par le biais de réseaux sociaux, de plateformes de partage de photos ou par des moyens plus traditionnels."
          href="/admin/ckretient-qui-fait-exploits"
        />
        <Card
          icon={
            <span className="material-symbols-outlined">escalator_warning</span>
          }
          title=" Témoignage de la vie avec Jésus"
          description="L'administration des photos peut également concerner le partage d'images avec d'autres personnes, que ce soit par le biais de réseaux sociaux, de plateformes de partage de photos ou par des moyens plus traditionnels."
          href="/admin/vie-avec-jesus"
        />
        <Card
          icon={<span className="material-symbols-outlined">event_note</span>}
          title="Les evenements"
          description="L'administration des photos peut également concerner le partage d'images avec d'autres personnes, que ce soit par le biais de réseaux sociaux, de plateformes de partage de photos ou par des moyens plus traditionnels."
          href="/admin/event"
        />
        <Card
          icon={
            <span className="material-symbols-outlined">psychology_alt</span>
          }
          title="Que penses-tu pasteur"
          description="L'administration des photos peut également concerner le partage d'images avec d'autres personnes, que ce soit par le biais de réseaux sociaux, de plateformes de partage de photos ou par des moyens plus traditionnels."
          href="/admin/que-penses-tu-pasteur"
        />
        <Card
          icon={<span className="material-symbols-outlined">forum</span>}
          title="Conversation"
          description="L'administration des photos peut également concerner le partage d'images avec d'autres personnes, que ce soit par le biais de réseaux sociaux, de plateformes de partage de photos ou par des moyens plus traditionnels."
          href="/admin/conversation"
        />
        <Card
          icon={
            <span className="material-symbols-outlined">
              familiar_face_and_zone
            </span>
          }
          title="La biographie du pasteur"
          description="L'administration des photos peut également concerner le partage d'images avec d'autres personnes, que ce soit par le biais de réseaux sociaux, de plateformes de partage de photos ou par des moyens plus traditionnels."
          href="/admin/biographie"
        />
        <Card
          icon={
          <span className="material-symbols-outlined">headphones</span>}
          title="podcast"
          description="L'administration des photos peut également concerner le partage d'images avec d'autres personnes, que ce soit par le biais de réseaux sociaux, de plateformes de partage de photos ou par des moyens plus traditionnels."
          href="/admin/podcast"
        />
        <Card
          icon={<span className="material-symbols-outlined">headphones</span>}
          title="A decouvivre"
          description="L'administration des photos peut également concerner le partage d'images avec d'autres personnes, que ce soit par le biais de réseaux sociaux, de plateformes de partage de photos ou par des moyens plus traditionnels."
          href="/admin/a-decouvivre"
        />
        <Card
          icon={
            <span className="material-symbols-outlined">
              cast_for_education
            </span>
          }
          title="Enseignement"
          description="L'administration des photos peut également concerner le partage d'images avec d'autres personnes, que ce soit par le biais de réseaux sociaux, de plateformes de partage de photos ou par des moyens plus traditionnels."
          href="/admin/enseignement"
        />
        <Card
          icon={
            <span className="material-symbols-outlined">support_agent</span>
          }
          title="Support"
          description="L'administration des photos peut également concerner le partage d'images avec d'autres personnes, que ce soit par le biais de réseaux sociaux, de plateformes de partage de photos ou par des moyens plus traditionnels."
          href="/admin/a-decouvivre"
        />
      </div>
    </div>
  );
};

export default Admin;
