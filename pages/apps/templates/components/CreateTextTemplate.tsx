import React from 'react';

const CreateTextTemplate = () => {
    return (
        <form>
            <div className="sm:flex flex-col justify-between items-start gap-4">
                <label htmlFor="hrLargeinput">Template Name :</label>
                <input id="hrLargeinput" type="name" placeholder="Template Name" className="form-input py-2.5 text-base border border-gray-300" />
            </div>
            <div className="my-4">
                <label className="my-4" htmlFor="ctnTextarea">
                    Message:
                </label>
                <textarea id="ctnTextarea" rows={3} className="form-textarea border border-gray-300" placeholder="Message" required></textarea>
            </div>
            <button type="submit" className="btn btn-outline-primary mt-8">
                Save Template
            </button>
        </form>
    );
};

export default CreateTextTemplate;
