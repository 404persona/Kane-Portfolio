import React from 'react'
import { RiGlobalFill, RiQuillPenLine, RiPantoneFill } from '@remixicon/react'
import Title from '../ui/title'
import ZoomIn from '../animations/zoomIn'

const servicesList = [
    {
        id: 1,
        icon: <RiGlobalFill size={65} />,
        service_name: "Custom Development",
        service_description: "Your Digital Architecture, Built with Our Pre-Cast Foundations"
    },
    {
        id: 2,
        icon: <RiQuillPenLine size={65} />,
        service_name: "CMS Development",
        service_description: "Pre-built kits power custom CMS websites across leading platforms."
    },
    {
        id: 3,
        icon: <RiPantoneFill size={65} />,
        service_name: "Marketing & Branding",
        service_description: "Build powerful brands with smart marketing strategies and impactful design.."
    },

]
const Services = () => {
    return (
        <section id="services" className="services-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12">
                        <Title>
                            <p>Services</p>
                            <h2>Quality Services</h2>
                        </Title>
                    </div>
                </div>
                <div className="row">
                    {
                        servicesList.map(({ icon, id, service_description, service_name }) => {
                            return (
                                <div key={id} className="col-lg-4 col-md-6">
                                    <ZoomIn id={id}>
                                        <div className="service-item">
                                            {icon}
                                            <h4>{service_name}</h4>
                                            <p>{service_description}</p>
                                        </div>
                                    </ZoomIn>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Services