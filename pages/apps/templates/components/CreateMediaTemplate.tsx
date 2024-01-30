import React from 'react';

const CreateMediaTemplate = () => {
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
                    <label htmlFor="hrLargeinput">Media Caption:</label>
                    <input id="hrLargeinput" type="name" placeholder="Media Caption" className="form-input py-2.5 text-base border border-gray-300" />
                </div>
            </div>
            <div className="my-4">
                <label className="my-4" htmlFor="ctnFile">
                    Upload Files:
                </label>
                <input
                    id="ctnFile"
                    type="file"
                    className="form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file-ml-5 file:text-white file:hover:bg-primary"
                    required
                />
                
            </div>
            <button type="submit" className="btn btn-outline-primary mt-8">
                Save Template
            </button>
        </form>
    );
};

export default CreateMediaTemplate;
