import React from 'react';
import styles from './Main.module.scss';

import { useLocation } from 'react-router-dom';

import { ELEMENTS_DATA } from './data';

import { Icon } from '../../assets/icon';

const Main = () => {

    const { pathname } = useLocation();
    const lastPart = pathname.split('/').pop();

    return (
        <main>
            <div style={{ backgroundColor: ELEMENTS_DATA[lastPart].color }} className={styles.headBlock}>
                <div className={styles.leftHeadBlock}>
                    <p className={ELEMENTS_DATA[lastPart].abbreviation.length === 1 ? styles.abbreviation_one : styles.abbreviation_many}>{ELEMENTS_DATA[lastPart].abbreviation}</p>
                    <h1>{ELEMENTS_DATA[lastPart].name}</h1>
                    <p className={styles.translate_name}>{ELEMENTS_DATA[lastPart].translate_name}</p>
                    <p className={styles.atomic_mass}>|{ELEMENTS_DATA[lastPart].atomic_mass}|</p>
                </div>
                <div className={styles.rightHeadBlock}>
                    <Icon />
                    <p>{ELEMENTS_DATA[lastPart].serial_number}</p>
                </div>
            </div>
            <section className={styles.infoBlock}>
                <h3>Химический элемент</h3>
                <p>{ELEMENTS_DATA[lastPart].chemical_element}</p>
                <h3>Устройство</h3>
                <p>{ELEMENTS_DATA[lastPart].structure}</p>
                <h3>Минерал</h3>
                <p>{ELEMENTS_DATA[lastPart].mineral}</p>
            </section>
        </main>
    )
}

export default Main;