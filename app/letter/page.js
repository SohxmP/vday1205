'use client'

import { useEffect, useState } from 'react';
import './styles.css';
import cutie from './cutie.png';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Letter(){

    const router = useRouter();

    const [rm, setRm] = useState({class: 'rm-hidden'});
    const [sl, setSl] = useState(false);

    try{
        window.onscroll = function(ev) {
            if (((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight - 100) && (rm.class == 'rm')) {
                setSl(true);
            }
        };
    }
    catch(e){
        alert(e);
    }

    useEffect(() => {
        if(localStorage.getItem('code') == '070524'){

        }
        else{
            router.push('./');
        }
    }, []);

    return (
        <div className={rm.class == 'rm-hidden' ? 'main' : 'main-exp'}>
            <button className={sl ? 'sl' : 'slh'} onClick={() => {
                for(let i=0; i<50; i++){
                    const heart = document.createElement("div");
                    heart.className = "heartp";
                    heart.style.left = Math.random() * 100 + "vw";
                    heart.style.animationDuration = Math.floor(Math.random() * 2) + 3 + "s";
                    heart.style.animationDelay = (Math.random() * 4) + 0.5 + "s";
                    document.body.appendChild(heart);

                    setTimeout(() => {
                        heart.remove();
                    }, 15000);
                }
            }}>Send Love</button>
            <div className={rm.class == 'rm-hidden' ? 'letter' : 'letter-exp'}>
                <button className='buttondown' onClick={(e) => {
                    setRm({class: 'rm'});
                    document.getElementsByClassName('buttondown')[0].remove();
                }}>read more</button>
                <p className='greetings'>Dear <span className='isha'>Isha</span> ,</p>
                <p className='body'>
                    Happy <span>Valentines</span> Day <span>Tulip</span> ! Im so sorry we couldnt celebrate our first <span>Valentines</span> Day together..
                    So I thought I would make this choti website for you.
                    <br/>
                    Since the day I met you, I knew you were the one. You are the only person I want and the only person that I need.
                    <br/>
                    We've been through so much together and we've come a long way.
                    Every moment I've spent with you is so special and will always be special.
                    Thankyou for being the Best Girlfriend ever.
                    Thankyou for being my Bestest Friend and supporting me through everything.
                    You have helped me grow and you make me want to become a better man, a better boyfriend for you.
                    Im really sorry for constantly hurting you and giving you a hard time. Trust me I will be better. 
                    <br/>
                    You mean everything to me <span>Isha</span> .
                    I want to spend the rest of my life with you and only youch.
                    You make me happy, you make me laugh, you make me cry(happy tears), you make me feel loved.
                    You have showed me what true love is. You take care of me and you love me unconditionally.
                    I genuinely want to Thankyou for this and always staying by my side,
                    no matter how hard things got.. 
                </p>

                <div className={rm.class}>
                    <br/>
                    <p>
                        I want you to know that you are <span>Loved</span> .
                        And you will always be <span>Loved</span> till I take my last breath.
                        I want you to know that Im always with you and I will always support you and your dreams.
                        <br/>
                        Im proud of you <span>Isha</span> .
                        <br/>
                        You are the most strongest, smartest, loving, caring and the most independent person Ive met and I ever will.
                        You are the most beautiful and the most smash-est woman to ever exist.
                        Your bright, loving and caring Personality is one of the things that I love the most about you.
                        Your stunning hourglass figure, that cutiest face, those beautiful hazel brown eyes which I could stare into till the day I die(literally),
                        that cutie smile ah, that chotusa and awi nose, those juicy and softiest lips which i want to kiss forever,
                        those hot shoulders and shoulder bones, those huge boobies(maze pillows) ah,
                        that flat insanely hot stomach, that cutie choti isha ah,
                        those thicc juicy thighs ah, that humongus thicc ass ah,
                        those cutie little feet ah.
                        <br/>
                        are literal perfection. You are literal perfection.
                        <br/>
                        Thankyou for being my <span>Girlfriend</span> , my <span>Valentine</span> , my first and my last <span>Love</span>
                        <br/>
                        <br/>
                        I know we have aple exams rn and I want to wish you All The Best.
                        You can do it <span>Isha</span> .
                        I believe in you. You are going to do Amazing.
                        Believe in yourself. Be Confident. You are the Smartest Person I know.
                        Keep working hard like you have these past months and stay consistent.
                        I am your biggest fan and I always will be.
                        <br/>
                        <br/>
                        Finally I want to Thankyou for giving me the best 9.25 months of my life and so many more(till I take my last breath).
                        Thankyou for being <span>Perfect</span> and always bringing joy, laughter and happiness to my life.
                        I cant express enough how grateful I am.
                        It really is a blessing to have you in my life and I want you to stay forever(pls).
                        <br/>
                        <br/>
                        <span>I Love You Isha and I always will .</span>
                        <br/>
                        <span>mwah</span>
                        <br/>
                        <span>Ishaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</span>
                    </p>

                    <p className='closing'>
                        <Image src={cutie} width={110} height={120} className='cutie' alt='cutie' />
                        With all my <span>Love</span> ,
                        <br/>
                        Tuzach and fkt tuzach,
                        <br/>
                        <span>Soham</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
