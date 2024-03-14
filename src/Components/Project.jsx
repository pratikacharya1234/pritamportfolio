import { useState } from 'react';
import './index.css'; 

export default function Project() {
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <b><h1 id="project">Expertise</h1></b>
            <div className="experties">
                <img src="/images/figma.png" alt="figma" />
                <img src="/images/photoshop.png" alt="photoshop" /><br/>
            </div>
                <strong><p className='op'>As a UI/UX designer,I specialize using Figma and Adobe Photoshop for my
                                                design work.
                </p></strong>
            <div className="project-container">
            <h1>My Projects</h1>
            <div className="project-list">
                <div className="project-item" onClick={() => handleImageClick("./images/cv.png")} style={{ backgroundImage: `url(${"./images/cv.png"})` }}>
                    
                </div>
                <div className="project-item" onClick={() => handleImageClick("./images/bs.png")} style={{ backgroundImage: `url(${"./images/bs.png"})` }}>
                    
                </div>
                <div className="project-item" onClick={() => handleImageClick("./images/mac.png")} style={{ backgroundImage: `url(${"./images/mac.png"})` }}>
                    
                </div>
                <div className="project-item" onClick={() => handleImageClick("./images/op.png")} style={{ backgroundImage: `url(${"./images/op.png"})` }}>
                    
                </div>
                <div className="project-item" onClick={() => handleImageClick("./images/hihi.png")} style={{ backgroundImage: `url(${"./images/hihi.png"})` }}>
                    
                </div>
                <div className="project-item" onClick={() => handleImageClick("./images/opp.png")} style={{ backgroundImage: `url(${"./images/opp.png"})` }}>
                    
                </div>
            </div>
                {showModal && (
                    <div className="modal" onClick={closeModal}>
                        <span className="close" onClick={closeModal}>&times;</span>
                        <img src={selectedImage} alt="Project" className="modal-content" />
                    </div>
                )}
            </div>
        </> 
    );
}