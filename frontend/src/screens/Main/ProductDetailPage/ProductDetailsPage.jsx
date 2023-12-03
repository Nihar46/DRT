import React, { useState } from 'react';
import './ProductDetailsPage.css';
import { useParams } from 'react-router-dom';
import image1 from '../../../assets/floor/image1.jpg'
import Header from '../../../components/Header';
import ArrowBack from '@mui/icons-material/ArrowBack';
import AddBoxIcon from '@mui/icons-material/AddBox';
import GetAppRoundedIcon from '@mui/icons-material/GetAppRounded';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const AccordionSection = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="accordion-section">
            <h3 className="accordion-title" onClick={() => setIsOpen(!isOpen)}>
            {title} <span className="accordion-arrow">{isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}</span>
            </h3>
            <hr></hr>
            {isOpen && <div className="accordion-content">{children}</div>}
        </div>
    );
};

const ProductDetailsPage = () => {
    // Dummy product data - replace with actual data
    const product = {
        name: 'Abrasive Action II',
        images: [image1], // Replace with actual image paths
        swatches: [
            { color: 'WINTER GRAY', code: '#757575', image: image1 },
            { color: 'WINTER GRAY', code: '#757575', image: image1 },
            { color: 'WINTER GRAY', code: '#757575', image: image1 },
            { color: 'WINTER GRAY', code: '#757575', image: image1 },
            { color: 'WINTER GRAY', code: '#757575', image: image1 },
            { color: 'WINTER GRAY', code: '#757575', image: image1 },
            // ... other swatches
        ],
        formats: [
            { type: 'Tile', available: true },
            { type: 'Roll', available: true },
        ],
        description: 'Abrasive Action II',
        // ... other product details
    };

    const params = useParams();
    const id = params.id;

    return (
        <div className="product-details-container">
            <Header />
            <div className="back-button">
                <ArrowBack></ArrowBack>
                BACK</div>
            <div className="main-content">
                <div className="image-section">
                    <button className="view-visualizer-button">VIEW IN VISUALIZER</button>
                    <GetAppRoundedIcon className='download-button' />
                    <img src={product.images[0]} alt={product.name} className="product-main-image" />

                    <div>
                        <p>Products | Carpet | Powerbond - Resilient/Carpet Hybrid </p>

                        <hr></hr>
                    </div>
                </div>
                <div className="details-section">
                    <h1 className="product-title">{product.name}</h1>
                    <div className="colors">
                        <span>Colors ({product.swatches.length})</span>
                        <AddBoxIcon />
                    </div>
                    <div className="swatches">
                        {product.swatches.map(swatch => (
                            <div key={swatch.id} className="swatch">
                                {/* <img src={swatch.image} alt={swatch.label} /> */}
                            </div>
                        ))}
                    </div>


                    <div className="product-description">
                        <p>{product.description}</p>
                    </div>
                    <button className="add-button">+ ADD</button>
                    <div className="formats-sizes">
                        <span>Fomats and sizes</span>
                        <div className="formats">
                            {product.formats.map((format, index) => (
                                <label key={index}>
                                    {/* <input type="radio" name="format" value={format.type} disabled={!format.available} />
                                    {format.type} ({format.available ? '1' : '0'}) */}
                                    <span>{format.type}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="details-container">
                <div className='main-details'>
                    <div className="header">
                        <h1>Abrasive Action II 02578 WINTER GRAY 19103</h1>
                    </div>
                    <div className="content">
                        <p>Properly designed entryway systems can prevent 80% of outside soil from being tracked inside. Abrasive Action is a versatile Powerbond and modular product that is ideal for use as an entryway system or for interior environments. Welded seams create a complete wall-to-wall moisture barrier. This system provides a sound, cost-effective solution for long-term appearance retention at entryways and other high traffic areas.</p>
                        <p>Discover this product's environmental attributes and its contribution to LEED at ecomedes.</p>
                        <h2>KEY FEATURES</h2>
                        <ul>
                            <li>Available in 7 colors</li>
                            <li>Available in Modular Carpet Tile (24" x 24") and Powerbond (Roll)</li>
                            <li>TTX SD Solution Dyed</li>
                            <li>Permanent stain resistance</li>
                            <li>Tarket Footprint - Powerbond® / Tarket Footprint - Ethos® Modular</li>
                        </ul>
                    </div>
                </div>
                <div className="sidebar">
                    <div className="accordion">
                        <AccordionSection title="SUSTAINABILITY">
                            Content for sustainability...
                        </AccordionSection>
                        <AccordionSection title="SPECIFICATIONS">
                            Content for specifications...
                        </AccordionSection>
                        <AccordionSection title="INSTALLATION">
                            Content for installation...
                        </AccordionSection>
                        <AccordionSection title="DOWNLOADS & IMAGES">
                            Content for downloads & images...
                        </AccordionSection>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;
