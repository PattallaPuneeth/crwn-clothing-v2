
import './form-input-styles.scss';
const FromInput=({label,...otherprops})=>{
    return(
        <div className="group">
            <input className='form-input'{...otherprops} />
            {label &&(<label className={`${otherprops.value.length ? 'shrink' : ''} form-input-label`}> {label}</label>)}
        </div>
    )
}
export default FromInput