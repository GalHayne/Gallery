function Checkbox({ onChange = () => { 'default printing no pass to this cmp function' }, label = 'Infinite photo slide' }) {
    return (
        <div className="rounded mx-auto m-2 flex d-flex align-content-center justify-content-center p-3 m-5 bg-secondary w-25" title="True: The images will return circularly" >
            <label className="text-light"> <i className="bi bi-arrow-repeat"></i> {label} : </label>
            <input className="m-2" defaultChecked={false} onChange={onChange} type="checkbox" />
        </div>
    )
}

export default Checkbox;