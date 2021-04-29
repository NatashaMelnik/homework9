import React, { useState } from 'react';
import timezones from 'compact-timezone-list';
import Select from 'react-select';
<<<<<<< HEAD
import ConvertTime from '../services/ConvertTime';
import './clockstyle.css';
=======
import ConvertTime from './ConvertTime'
import './clockstyle.css'
>>>>>>> ec36b3e699ae56f22bd0beacadd631d659131c70

function Selector() {

    const [selectedValue, setSelectedValue] = useState("");
    const handleChange = e => { setSelectedValue(e.offset); };

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
            </div>
            }

        </div>
    );
}

export default Selector
