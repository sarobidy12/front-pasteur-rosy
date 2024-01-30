import React from "react";
import style from "./admin.module.css";
import Card from "@/app/admin/Component/Card/Module";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Administration",
  description: "Administration",
};

const Admin = () => {
  return (
    <div className={style.container}>
      <h1 className={style.logoAdmin}>
        <span className="material-symbols-outlined">admin_panel_settings</span>
      </h1>
      <h2 className={style.title}>Administration des contenues.</h2>
      <div>
        <Card
          icon={<span className="material-symbols-outlined">image</span>}
          title="Photo"
          description="Organiser l'affichage de vos photos en creons des albums pour retrouver facilement vos photos"
          href="/admin/photos"
        />
        <Card
          icon={<span className="material-symbols-outlined">folder_copy</span>}
          title="Categorie"
          description="Cree, Modifier votre categorie, le categorie c'est theme de votre contenue."
          href="/admin/categorie"
        />
        <Card
          icon={
            <span className="material-symbols-outlined">military_tech</span>
          }
          title="Chretient qui fait des explois"
          description="Raconter les histoires de  ses chretient qui on fait des explois dans leur domaine respective"
          href="/admin/ckretient-qui-fait-exploits"
        />
        <Card
          icon={
            <span className="material-symbols-outlined">escalator_warning</span>
          }
          title="Témoignage de la vie avec Jésus"
          description="Partage a travers un temoignage comment Jesus a changer leur vie."
          href="/admin/vie-avec-jesus"
        />
        <Card
          icon={<span className="material-symbols-outlined">event_note</span>}
          title="Les evenements"
          description="Dite nous, l'agendat du pasteur dans les prochaine jour."
          href="/admin/event"
        />
        <Card
          icon={
            <span className="material-symbols-outlined">psychology_alt</span>
          }
          title="Que penses-tu pasteur"
          description="J'ai une question pasteur que penses-tu ?"
          href="/admin/que-penses-tu-pasteur"
        />
        <Card
          icon={<span className="material-symbols-outlined">forum</span>}
          title="Conversation"
          description="Ajouter des groupes de discution pour echanger avec la communauter."
          href="/admin/conversation"
        />
        <Card
          icon={
            <span className="material-symbols-outlined">
              familiar_face_and_zone
            </span>
          }
          title="La biographie du pasteur"
          description="Raconter-nous l'histoire du pasteur."
          href="/admin/biographie"
        />
        <Card
          icon={<span className="material-symbols-outlined">headphones</span>}
          title="podcast"
          description="Administrer les enseignements en audio."
          href="/admin/podcast"
        />
        <Card
          icon={<span className="material-symbols-outlined">headphones</span>}
          title="A decouvivre"
          description="Dites-nous des choses que l'on dois decouvrire sur Jesus,sur ma vie spirituel."
          href="/admin/a-decouvivre"
        />
        <Card
          icon={
            <span className="material-symbols-outlined">
              cast_for_education
            </span>
          }
          title="Enseignement"
          description="Administrer les enseignements."
          href="/admin/enseignement"
        />
        <Card
          icon={<span className="material-symbols-outlined">history_edu</span>}
          title="NewLetter"
          description="Partager les pensees du jour."
          href="/admin/newLetter"
        />
        <Card
          icon={<span className="material-symbols-outlined">badge</span>}
          title="Utilisateur"
          description="Administrer les utilisateur."
          href="/admin/utilisateur"
        />
        <Card
          icon={<span className="material-symbols-outlined">auto_stories</span>}
          title="Parole du jour"
          description="Administrer les paroles du jour."
          href="/admin/parole-du-jour"
        />
        <Card
          icon={
            <span className="material-symbols-outlined">support_agent</span>
          }
          title="Support"
          description="Des problemes et anomalie ? durrant l'utilisation, le support est la pour vous assister et assurrer que tout fonctionnement correctement vous assister en cas de probleme."
          href="/admin/Support"
        />
      </div>
    </div>
  );
};

export default Admin;
