import React, { useState } from 'react'
import Header from '../components/Layout/Header'
import ProfileSidebar from '../components/Profile/ProfileSidebar'
import ProfileContent from '../components/Profile/ProfileContent'

const ProfilePage = () => {
    const [active, setActive] = useState(1);
    return (
        <div>
            <Header />
            <div className='w-11/12 mx-auto flex'>
                <div className='w-[50px] xl:w-[350px] mr-3'>
                    <ProfileSidebar active={active} setActive={setActive} />
                </div>
                <ProfileContent active={active}/>
            </div>
        </div>

    )
}

export default ProfilePage