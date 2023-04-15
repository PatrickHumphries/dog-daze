import { useState } from 'react'
import Nav from '../components/Nav';

const Onboarding = () => {
    return (
        <>
            <Nav
                setShowModal={() => { }}
                showModal={false}
            />
            <div className='onboarding'>
                <h2>CREATE ACCOUNT</h2>
                <form onSubmit={handleSubmit}>
                    <section>
                        <label htmlFor="dog_name">Dog's Name</label>
                        <input
                            id="dog_name"
                            type="text"
                            name="dog_name"
                            placeholder="Dog's Name"
                            required={true}
                            value={""}
                            onChange={handleChange}
                        />


                        <label htmlFor="first_name">Owner's Name</label>
                        <input
                            id="first_name"
                            type="text"
                            name="first_name"
                            placeholder="Your Name"
                            required={true}
                            value={""}
                            onChange={handleChange}
                        />


                        <label htmlFor="first_name">Birthday</label>
                        <input
                            id="dob_day"
                            type="number"
                            name="dob_day"
                            placeholder="DD"
                            required={true}
                            value={""}
                            onChange={handleChange}
                        />
                        <input
                            id="dob_month"
                            type="number"
                            name="dob_month"
                            placeholder="MM"
                            required={true}
                            value={""}
                            onChange={handleChange}
                        />
                        <input
                            id="dob_year"
                            type="number"
                            name="dob_year"
                            placeholder="YYYY"
                            required={true}
                            value={""}
                            onChange={handleChange}
                        />
                    </section>
                </form>
            </div>

        </>
    )
};

export default Onboarding;