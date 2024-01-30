// Header.js
"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";
import { usePathname } from "next/navigation";
import { img } from "@/app/Utils/img";
import useUser from "@/app/Store/User";

const Header = () => {
  const path = usePathname();
  const userConnected: any =
    typeof sessionStorage !== undefined && sessionStorage.getItem("user")
      ? JSON.parse(sessionStorage.getItem("user"))
      : null;

  const { setInfo } = useUser();

  useEffect(() => {
    setInfo(userConnected);
  }, []);
  
  return (
    <>
      {!path.includes("/admin") && (
        <header className={styles.header}>
          <div className={styles.container}>
            <div className={styles.logo}>
              <Link href="/">
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  width={300}
                  height={100}
                  style={{ border: "1px solid" }}
                />
              </Link>
            </div>
            <nav className={styles.nav}>
              <Link href="/" className={`${styles.link} ${styles.linkIcon}`}>
                <span className="material-symbols-outlined">home</span>
                Acceuil
              </Link>
              <Link
                href="/enseignement"
                className={`${styles.link} ${styles.linkIcon}`}
              >
                <span className="material-symbols-outlined">school</span>
                Enseignement
              </Link>
              <Link
                href="/podcast"
                className={`${styles.link} ${styles.linkIcon}`}
              >
                <span className="material-symbols-outlined">headphones</span>
                Podcast
              </Link>

              {!userConnected._id && (
                <Link
                  href="/se-connecter"
                  className={`${styles.linkMobil} ${styles.link}`}
                >
                  <span className="material-symbols-outlined">login</span>
                  Se connecter
                </Link>
              )}

              {userConnected?._id ? (
                <Link
                  href="/mon-compte"
                  className={`${styles.sign} ${styles.linkIcon}`}
                >
                  {userConnected.img ? (
                    <>
                      <Image
                        src={img(userConnected.img)}
                        alt={userConnected.lastName}
                        width={25}
                        height={25}
                      />
                    </>
                  ) : (
                    <>
                      {userConnected.gender === "homme" ? (
                        <span className="material-symbols-outlined">face</span>
                      ) : (
                        <span className="material-symbols-outlined">
                          face_3
                        </span>
                      )}
                    </>
                  )}
                  Mon compte
                </Link>
              ) : (
                <div className={styles.containerSign}>
                  <Link
                    href="/se-connecter"
                    className={`${styles.login} ${styles.linkIcon}`}
                  >
                    <span className="material-symbols-outlined">login</span>
                    Se connecter
                  </Link>
                  <Link
                    href="/s-inscrire"
                    className={`${styles.sign} ${styles.linkIcon}`}
                  >
                    <span className="material-symbols-outlined">
                      connect_without_contact
                    </span>
                    S&apos;inscrire
                  </Link>
                </div>
              )}
            </nav>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
