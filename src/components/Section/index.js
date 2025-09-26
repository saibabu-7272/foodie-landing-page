import './index.css';
import { MdAccessTimeFilled } from "react-icons/md";
import { TbToolsKitchen2 } from "react-icons/tb";

const MainSection = () => (
    <section className='main-section'>
        <p className='tag'>Hot Recipe</p>
        <h2 className='section-heading'>Welcome to Foodie</h2>
        <p>Your one-stop destination for delicious recipes and food inspiration.</p>
        <div className='tags-container'>
            <div className='flex tag-box'>
                <i><MdAccessTimeFilled /></i>
                <p>Time</p>
            </div>
            <div className='flex tag-box'>
                <i><TbToolsKitchen2 /></i>
                <p>Chicken</p>
            </div>
        </div>      
    </section>
)   

export default MainSection;