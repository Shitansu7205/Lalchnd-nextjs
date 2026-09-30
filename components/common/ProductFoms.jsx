"use client";

export default function ProductFoms() {
    return (
        <div
            className="offcanvas offcanvas-end canvas-sidebar canvas-description"
            id="askQuestions"
        >
            <div className="canvas-header">
                <h3 className="title fw-normal text-uppercase">ask a question</h3>
                <span
                    className="icon-close link icon-close-popup"
                    data-bs-dismiss="offcanvas"
                />
            </div>
            <div className="canvas-body">
                <form className="form-ask" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-content">
                        <fieldset className="tf-field">
                            <input className="tf-input" type="text" placeholder="" required />
                            <label className="tf-lable">Name s*</label>
                        </fieldset>
                        <fieldset className="tf-field">
                            <input
                                className="tf-input"
                                type="email"
                                placeholder=""
                                defaultValue="Hello@vemus.com"
                                required
                            />
                            <label className="tf-lable">Email *</label>
                        </fieldset>
                        <fieldset className="tf-field">
                            <input
                                className="tf-input"
                                type="number"
                                placeholder=""
                                required
                            />
                            <label className="tf-lable">Phone number *</label>
                        </fieldset>
                        <fieldset className="tf-field">
                            <input
                                className="tf-input"
                                type="email"
                                placeholder=""
                                required
                            />
                            <label className="tf-lable">Message *</label>
                        </fieldset>
                    </div>
                    <button
                        type="submit"
                        className="tf-btn btn-fill fw-medium w-100 animate-btn home-cta-btn"
                    >
                        Submit Now
                    </button>

                </form>
            </div>
        </div>
    );
}
