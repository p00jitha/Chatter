import React from 'react'

const CheckBox = ({ CheckboxChange, selectGender }) => {
    return (
        <div>
            <div className='flex'>
                <div className='form-control'>
                    <label className={`label gap-2 cursor-pointer ${selectGender === "male" ? "selected" : ""} `}>
                        <span className='label-text text-white'>Male</span>
                        <input type='checkbox' className='checkbox border-slate-900' checked={selectGender === "male"}
                            onChange={() => CheckboxChange("male")} />
                    </label>
                </div>
                <div className='form-control'>
                    <label className={`label gap-2 cursor-pointer ${selectGender === "female" ? "selected" : ""} `}>
                        <span className='label-text text-white'>Female</span>
                        <input type='checkbox' className='checkbox border-slate-900' checked={selectGender === "female"}
                            onChange={() => CheckboxChange("female")} />
                    </label>
                </div>
            </div>
        </div>
    )
}

export default CheckBox
