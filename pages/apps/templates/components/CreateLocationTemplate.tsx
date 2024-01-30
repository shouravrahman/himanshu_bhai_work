import React from 'react';

const CreateLocationTemplate = () => {
    return (
        <form className="space-y-5">
            <div className="sm:flex flex-col justify-between items-start gap-4">
                <label htmlFor="hrLargeinput">Template Name:</label>
                <input id="hrLargeinput" type="name" placeholder="Template Name" className="form-input py-2.5 text-base border border-gray-300" />
            </div>
            <div className="sm:flex flex-col justify-between items-start gap-4">
                <label htmlFor="hrDefaultinput">Latitude:</label>
                <input id="hrDefaultinput" type="text" placeholder="24.12231" className="form-input border border-gray-300" />
            </div>
            <div className="sm:flex flex-col justify-between items-start gap-4">
                <label htmlFor="hrSmallinput">Longitude:</label>
                <input id="hrSmallinput" type="text" placeholder="44.444555" className="form-input py-2.5 text-base border border-gray-300" />
            </div>
            <button type="submit" className="btn btn-outline-primary mt-8">
                Save Template
            </button>
        </form>
    );
};

export default CreateLocationTemplate;
