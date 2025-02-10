'use client'

import "./styles.css";
import styles from "./main.module.css";
import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import { useRouter } from "next/navigation";

export default function Main() {

    const router = useRouter();

    const [display, setDisplay] = useState(false);
    const [envp, setEnvp] = useState(false);
    const [fadetext, setFadetext] = useState({fade: 'fade-out'});
    const [vq, setVq] = useState({vq: 'vq-hidden'});
    const [vc, setVc] = useState({vc: 'vc-hidden'});
    const [hearts, setHearts] = useState(false);

    useEffect(() => {
        setHearts(false);
        if(localStorage.getItem('code') == '070524'){
            setFadetext({fade: 'fade-out'});
            setTimeout(() => {
                setDisplay(true);
                setEnvp(true);
            }, 500);
        }
        else{
            router.push('./');
        }
    }, []);

    
    var id;


    useEffect(() => {
        if(hearts == false){
            

            clearInterval(id);
            console.log("yes");
            Array.from(document.getElementsByClassName('heartp')).forEach(heart => {
                heart.remove();
            });
            setHearts(false);
        }else{
            id = setInterval(() => {
                for(let i=0; i<15; i++){
                    const heart = document.createElement("div");
                    heart.className = "heartp";
                    heart.style.left = Math.random() * 100 + "vw";
                    heart.style.animationDuration = Math.floor(Math.random() * 4) + 4 + "s";
                    heart.style.animationDelay = (Math.random() * 4) + 0.5 + "s";
                    document.body.appendChild(heart);

                    setTimeout(() => {
                        heart.remove();
                    }, 15000);
                }
            }, 2000);
        }
    }, [hearts])

    function start(){
        setEnvp(false);
        setTimeout(() => {
            setFadetext({fade: 'fade-in'});
            setTimeout(() => {
                setFadetext({fade: 'fade-out'})
                setVq({vq: 'vq'});
            }, 4000);
        }, 1000);
    }

    function vday(){
        setVq({vq: 'vq-hidden'});
        setTimeout(() => {
            setVc({vc: 'vc'});
            confetti({
                    particleCount: 200,
                    spread: 100,
                    origin: {y: 0.8},
                    gravity: 0.9,
            });
            setHearts(true);
            
        }, 1000);
    }


    return (
        <div className={styles.main} style={{backgroundColor: display ? "#FF85A1" : "#000000", opacity: 1}}>
            {
                envp ? 
                <div className={styles.wrapper} onClick={start} style={{opacity: envp ? 1 : 0}}>
                    <div className={styles.heart}></div>
                    <div className={styles.envelope}></div>
                    <div className={styles.letter}><p>click me</p></div>
                </div>
                :
                <div className={styles.vday}>
                    <h1 className={fadetext.fade}>Helo</h1>
                </div>
            }
            <div className={vq.vq}>
                <p>Will you be my <span>Valentine</span> ?</p>
                <div>
                    <button onClick={vday}>No</button>
                    <button onClick={vday}>Yes</button>
                </div>
            </div>
            <div className={vc.vc}>
                <h1>Happy <span>Valentines</span> Day!</h1>
                <div className="buttonnext" onClick={() => {
                    setHearts(false);
                    clearInterval(id);
                    setTimeout(() => {
                        router.push('./letter');
                    }, 2000);
                    
                }}>read letter</div>
            </div>
        </div>
    )

}