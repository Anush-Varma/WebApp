import TopMenu from "@/Components/TopMenu";
import { RiDeleteBinLine } from "react-icons/ri";

import '..//..//css/createpost.css';

import '..//..//css/save-delete-button.css';

const CreatePost = () => {
    return(
        <div className='post-container'>
            <label title-label> Title </label>
            <input className='title' type="text" >
            </input>
            <input className='tags' type="checkbox" />
            <label className="desciption-label">Description</label>
            <textarea className='description' type="text" >
            </textarea>

            <div className='save-delete-button'>
                <button className='delete'>
                    <RiDeleteBinLine size={35}/>
                </button>
                <button className='save'>
                    <label>
                        Save
                    </label>
                </button>
            </div>
            
        </div>
    )
}

export default CreatePost;