import React from 'react';
import { useRouter } from 'next/router';
import resume from "../../public/resume.png";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


function Resume() {
    const router = useRouter();

    const navigateToHome = () => {
        router.push('/');
    };
    return (

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#D3D3D3' }}>
            <div style={{ position: 'absolute', top: '20px', left: '20px', zIndex: '100' }}>
                <FontAwesomeIcon icon={faArrowLeft} size="2x" onClick={navigateToHome} className="shake"/>
            </div>
            <div style={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '2px solid black', marginTop: '30px', marginBottom: '30px' }}>
                <Image src={resume} alt="Resume"/>
            </div>
        </div>

    );
}

export default Resume;