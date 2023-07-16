import React from 'react'

const MenuCard = ({ menudata }) => {
    return (
        <>
        <section className="main-card--cointainer">
            {menudata.map((ele) => {
                const {id,web_pages,domains,country,name,state_province,alpha_two_code}=ele;
                return (
                    <>
                        <div className="card-container" key={id}>
                            <div className="card">
                                <div className="card-body">
                                    <span className='card-number card-circle subtle'>{id}</span>
                                    <span className='card-author subtle'>{country}</span>
                                    <h2 className="card-title">{name}</h2>
                                    <span className="card-description subtle">
                                        {web_pages}
                                    </span>
                                    <div className="card-read">
                                        
                                    </div>
                                </div>
                                {/* <img src={image} alt="images" className="card-media" /> */}
                                <button href={web_pages} className="card-tag subtle" >Addmission Now</button>
                            </div>
                        </div>
                    </>

                );
            }
            )
            }
            </section>

        </>
    )
}

export default MenuCard