import './InvestorReports.scss';

const InvestorReports = () => {
    return (
        <div className="investor-reports-wrapper">
            <section className="reports-section">
                <div className="container">
                    <h2 className="section-title left-aligned">Reports</h2>

                    <div className="reports-grid-3">
                        <div className="report-card">
                            <div className="icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="8" y1="17" x2="8" y2="12"></line>
                                    <line x1="12" y1="17" x2="12" y2="9"></line>
                                    <line x1="16" y1="17" x2="16" y2="14"></line>
                                </svg>
                            </div>
                            <h3>Quarterly Reports</h3>
                            <p>For shareholder inquiries and financial reports.</p>
                            <button className="view-report-btn">VIEW REPORT</button>
                        </div>

                        <div className="report-card">
                            <div className="icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="16" y1="2" x2="16" y2="6"></line>
                                    <line x1="8" y1="2" x2="8" y2="6"></line>
                                    <line x1="3" y1="10" x2="21" y2="10"></line>
                                </svg>
                            </div>
                            <h3>Annual Reports</h3>
                            <p>For shareholder inquiries and financial reports.</p>
                            <button className="view-report-btn">VIEW REPORT</button>
                        </div>

                        <div className="report-card">
                            <div className="icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                    <polyline points="14 2 14 8 20 8"></polyline>
                                </svg>
                            </div>
                            <h3>SEC Filing</h3>
                            <p>For shareholder inquiries and financial reports.</p>
                            <button className="view-report-btn">VIEW REPORT</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="governance-section-docs">
                <div className="container">
                    <div className="section-header centered">
                        <h2 className="section-title">Governance Documents</h2>
                        <div className="divider"></div>
                    </div>

                    <div className="reports-grid-2">
                        <div className="report-card">
                            <div className="icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="8" y1="17" x2="8" y2="12"></line>
                                    <line x1="12" y1="17" x2="12" y2="9"></line>
                                    <line x1="16" y1="17" x2="16" y2="14"></line>
                                </svg>
                            </div>
                            <h3>Quarterly Reports</h3>
                            <div className="card-list">
                                <span>Meet our leaders</span>
                                <span>Corporate governance</span>
                                <span>Committee Charters</span>
                            </div>
                            <button className="view-report-btn">VIEW REPORT</button>
                        </div>

                        <div className="report-card">
                            <div className="icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                    <polyline points="9 12 11 14 15 10"></polyline>
                                </svg>
                            </div>
                            <h3>Compliance Documents</h3>
                            <div className="card-list">
                                <span>Code of Ethics</span>
                                <span>Policies and procedures</span>
                                <span>Corporate Bylaws</span>
                            </div>
                            <button className="view-report-btn">VIEW REPORT</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default InvestorReports;
