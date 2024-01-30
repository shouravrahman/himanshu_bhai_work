import React, { useState } from 'react';

const CreateListTemplate = () => {
    const [lists, setLists] = useState([{ id: 1, title: '', valueName: '', valueDescription: '' }]);

    const addList = () => {
        const newList = { id: lists.length + 1, title: '', valueName: '', valueDescription: '' };
        setLists([...lists, newList]);
    };

    const handleInputChange = (index, field, value) => {
        const updatedLists = [...lists];
        updatedLists[index][field] = value;
        setLists(updatedLists);
    };
    return (
        <form className="space-y-5 ">
            <div className="sm:flex flex-col justify-between items-start gap-4 my-4">
                <label htmlFor="hrLargeinput">Template Name:</label>
                <input id="hrLargeinput" type="name" placeholder="Template Name" className="form-input py-2.5 text-base border border-gray-300" />
            </div>
            <div className="sm:flex flex-col justify-between items-start gap-4 my-4">
                <label htmlFor="hrLargeinput">Template Header:</label>
                <input id="hrLargeinput" type="header" placeholder="Example: Amazing Bold faced Header" className="form-input py-2.5 text-base border border-gray-300" />
            </div>
            <div className="my-4">
                <label className="my-4" htmlFor="ctnTextarea">
                    Message:
                </label>
                <textarea id="ctnTextarea" rows={3} className="form-textarea border border-gray-300" placeholder="Message" required></textarea>
            </div>
            <div className="sm:flex flex-col justify-between items-start gap-4 my-4">
                <label htmlFor="hrLargeInput">Button Text for select option:</label>
                <input id="hrLargeInput" type="email" placeholder="Example: required" className="form-input border border-gray-300" />
            </div>

            <div className="sm:flex flex-col justify-between items-start gap-4 my-4">
                <label htmlFor="hrLargeInput" className="text-left">
                    Template Footer Text :
                </label>
                <input id="hrLargeInput" type="footer" placeholder="Thank You" className="form-input py-2.5 text-base border border-gray-300" />
            </div>
            <div className="flex justify-between items-center">
                <h1 className="text-base font-semibold p-0">List Options :</h1>
                <span className="badge bg-primary w-[10rem] py-1 text-center rounded-lg text-md cursor-pointer my-4" onClick={addList}>
                    + Add More
                </span>
            </div>

            {lists.map((list, index) => (
                <div
                    key={list.id}
                    className="w-full bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none px-2 md:px-4 py-2"
                >
                    <div className="sm:flex flex-col justify-between items-start gap-4 my-4">
                        <h1 className="text-lg">List {list.id}</h1>
                        <label htmlFor={`title-${list.id}`} className="text-left">
                            List Section Title :
                        </label>
                        <input
                            id={`title-${list.id}`}
                            type="text"
                            placeholder="Example: Select a fruit"
                            className="form-input py-2.5 text-base border border-gray-300"
                            value={list.title}
                            onChange={(e) => handleInputChange(index, 'title', e.target.value)}
                        />
                    </div>

                    <div className="flex  gap-6">
                        <div className="sm:flex flex-col justify-between items-start gap-4 my-4">
                            <label htmlFor={`valueName-${list.id}`} className="text-left">
                                Enter List Value Name :
                            </label>
                            <input
                                id={`valueName-${list.id}`}
                                type="text"
                                placeholder="Example: Banana"
                                className="form-input py-2.5 text-base border border-gray-300"
                                value={list.valueName}
                                onChange={(e) => handleInputChange(index, 'valueName', e.target.value)}
                            />
                        </div>
                        <div className="sm:flex flex-col flex-1 justify-between items-start gap-4 my-4">
                            <label htmlFor={`valueDescription-${list.id}`} className="text-left">
                                Enter List Value Description :
                            </label>
                            <input
                                id={`valueDescription-${list.id}`}
                                type="text"
                                placeholder="Example: Banana is a healthy fruit"
                                className="form-input py-2.5 text-base border border-gray-300"
                                value={list.valueDescription}
                                onChange={(e) => handleInputChange(index, 'valueDescription', e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            ))}

            <button type="submit" className="btn btn-outline-primary mt-16">
                Save Template
            </button>
        </form>
    );
};

export default CreateListTemplate;
