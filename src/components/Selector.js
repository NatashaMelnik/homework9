import React, { useState } from 'react';
import timezones from 'compact-timezone-list';
import Select from 'react-select';
import ConvertTime from './ConvertTime'
import './clockstyle.css'

function Selector() {

    const [selectedValue, setSelectedValue] = useState("");
    const handleChange = e => {
        setSelectedValue(e.offset);
    }

    return (
        <div className="App">
            <Select
                placeholder="Select Timezone"
                value={timezones.find(obj => obj.offset === selectedValue)}
                options={timezones}
                onChange={handleChange}
            />
            {selectedValue && <div>
                <div>

                    <p>Now is:  {ConvertTime(selectedValue)}</p>

                </div>
            </div>}

        </div>
    );
}

export default Selector
