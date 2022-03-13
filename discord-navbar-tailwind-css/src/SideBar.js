import { BsPlus, BsFillLightningFill, BsGearFill, BsFillCalendarFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';
import { GoOctoface, GoMarkGithub } from "react-icons/go";

const SideBar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
            {/* <i>A</i>
            <i>B</i>
            <i>C</i>
            <i>D</i>
            <i>E</i> */}
            <SideBarIcon icon={<GoMarkGithub size="20" />} />
            <SideBarIcon icon={<FaFire size="24" />} />
            <SideBarIcon icon={<BsPlus size="32" />} />
            <SideBarIcon icon={<BsFillLightningFill size="20" />} />
            <SideBarIcon icon={<BsFillCalendarFill size="20" />} />
            <SideBarIcon icon={<FaPoo size="20" />} />
            <SideBarIcon icon={<GoOctoface size="20" />} />
            <SideBarIcon icon={<BsGearFill size="20" />} />
        </div>
    )
};

const SideBarIcon = ({ icon, text = 'tooltip 💡' }) => (
    <div className="sidebar-icon cursor-pointer group">
        { icon }
        <span className="sidebar-tooltip group-hover:scale-100">
            { text }
        </span>
    </div>
);

export default SideBar;
