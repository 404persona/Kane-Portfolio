import { RiLock2Fill } from '@remixicon/react'
import React from 'react'
import './BrowserMockup.css'

const BrowserMockup = ({ url, img }) => {
    return (
        <div className="browser-mockup">
            {/* Browser Header */}
            <div className="browser-header">
                <div className="browser-header-content">
                    {/* Circles Left */}
                    <div className="browser-circles">
                        <div className="circle red"></div>
                        <div className="circle yellow"></div>
                        <div className="circle green"></div>
                    </div>

                    {/* Address Bar */}
                    <div className="address-bar">
                        <div className="address-content">
                            <RiLock2Fill size={18} />
                            <span className="url-text">{url}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Preview Image */}
            {img && (
                <div className="browser-preview">
                    <img
                        src={img}
                        alt="Website preview"
                        className="preview-img"
                    />
                </div>
            )}
        </div>
    )
}

export default BrowserMockup
