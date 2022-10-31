import React from 'react';
import logo from '../../public/images/Logo.png';
import Image from 'next/image';
import styles from './main-header.module.scss';
import configIcon from '../../public/icons/settings.png';
import deployIcon from '../../public/icons/play_arrow.png';

function MainHeader() {
  return (
    <div className={styles.main_header}>
      <div className={styles.main_header__title}>
        <Image src={logo} alt="Archify"/>
        <p className="subheading">My First Project</p>
      </div>
      <div className={styles.main_header__options}>
        <div className={styles.main_header__option_config}>
          <Image src={configIcon} alt="Configuration" />
          Config
        </div>
        <div className={styles.main_header__option_deploy}>
          <Image src={deployIcon} alt="Deploy" />
          Deploy
        </div>
        <div className={styles.main_header__user}>
          <span>JP</span>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;