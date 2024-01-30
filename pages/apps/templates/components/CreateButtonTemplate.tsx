import React, { useState } from 'react';

const CreateButtonTemplate = () => {
    const [buttons, setButtons] = useState([{ id: 1, text: 'Button 1' }]);

    const addButton = () => {
        const newId = buttons.length + 1;
        setButtons([...buttons, { id: newId, text: `Button ${newId}` }]);
    };
    return (
        <form>
            <div className="mb-5">
                <div className="sm:flex flex-col justify-between items-start gap-3">
                    <label htmlFor="hrLargeinput">Template Name:</label>
                    <input id="hrLargeinput" type="name" placeholder="Template Name" className="form-input py-2.5 text-base border border-gray-300" />
                </div>
            </div>
            <div className="mb-5">
                <div className="sm:flex flex-col justify-between items-start gap-3">
                    <label htmlFor="hrLargeinput">Message Caption:</label>
                    <input id="hrLargeinput" type="name" placeholder="Message Caption" className="form-input py-2.5 text-base border border-gray-300" />
                </div>
            </div>
            <div className="mb-5">
                <div className="sm:flex flex-col justify-between items-start gap-3">
                    <label htmlFor="hrLargeinput">Footer Text:</label>
                    <input id="hrLargeinput" type="name" placeholder="Footer Text" className="form-input py-2.5 text-base border border-gray-300" />
                </div>
            </div>
            <div className="flex flex-col mb-5 ">
                {buttons.map((button, index) => (
                    <div key={button.id} className="flex flex-col">
                        <label className="my-4" htmlFor="hrLargeinput">
                            Button {button.id} text:
                        </label>
                        {/* Button {button.id} text */}
                        <input
                            type="text"
                            id="hrLargeinput"
                            placeholder="Button Text"
                            value={button.text}
                            onChange={(e) => setButtons(buttons.map((b) => (b.id === button.id ? { ...b, text: e.target.value } : b)))}
                            className="form-input py-2.5 text-base border border-gray-300"
                        />
                    </div>
                ))}
                <span className="badge bg-primary w-[10rem] py-1 text-center rounded-lg text-md cursor-pointer my-4" onClick={addButton}>
                    + Add More Button
                </span>
            </div>
            <button type="submit" className="btn btn-outline-primary mt-8">
                Save Template
            </button>
        </form>
    );
};

export default CreateButtonTemplate;
