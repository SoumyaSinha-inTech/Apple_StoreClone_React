import React from 'react'
import StoreCard from './StoreCard'
import latest from '../../data/latest'
import { Link } from 'react-router-dom'

export default function Store() {
    return (
        <div>
            <div style={{ backgroundColor: 'rgb(246, 246, 246)', minHeight: '100vh', marginTop: '70px' }}>
                <div className="container">
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            flexWrap: "wrap",
                            gap: "30px",
                            paddingTop: "80px",
                            paddingBottom: "40px"
                        }}
                    >
                        <h1
                            style={{
                                fontSize: "clamp(45px, 8vw, 80px)"
                            }}
                        >
                            Store
                        </h1>
                        <div>
                            <h3 style={{ textAlign: 'right' }}>The best way to buy the<br />products you love.</h3>
                            <a href="https://contactretail.apple.com/Help" style={{ color: 'rgb(0, 117, 226)', textDecoration: 'none', fontSize: '14px', marginLeft: '130px' }}>Connect with a Specialist</a>
                            <br /><a href="https://www.apple.com/in/retail/" style={{ color: 'rgb(0, 117, 226)', textDecoration: 'none', marginLeft: '165px', fontSize: '14px' }}>Find an Apple Store</a>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <ul
                        style={{
                            display: "flex",
                            gap: "25px",
                            overflowX: "auto",
                            paddingBottom: "10px",
                            listStyle: "none",
                            scrollbarWidth: "none"
                        }}
                    >
                        <li>
                            <img src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-mac-nav-202603?wid=400&hei=260&fmt=png-alpha&.v=M1Q3OGxnb1lBaHhqNjZ2OVRXZmx4V2duSGVkdTVncGZYc0RnS1paU3IySCsrUlZaSVRoWVYzU0Qra0FoTmUwNng2bitObzZwQzk4cEorV1dZdzhIazAreDNWYWNLK1lESGRXY25VRzdWVTQ" height="75px" alt="" />
                            <br /> <Link className="nav-link" to="/products/mac">Mac</Link>
                        </li>
                        <li>
                            <img src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-iphone-nav-202509?wid=400&hei=260&fmt=png-alpha&.v=dW5XbHI1eDVpd01qWUU4bFRtWGZXM1doT212VzJoWjBSKzRpbmNETHN1QjVoZlhhY1p4QWdsTjFNaGRHM3FYWW15d1FhSDJ0bkR0ZGZtUjZJNmFveGVEVGM2Z3VEVWcvT3Z6KzhkR29Ddmc" height="75px" alt="" />
                            <br /> <Link className="nav-link" to="/products/iphone">iPhone</Link>
                        </li>
                        <li>
                            <img src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-ipad-nav-202405?wid=400&hei=260&fmt=png-alpha&.v=dW5XbHI1eDVpd01qWUU4bFRtWGZXNGFLQTJVNnlNQmQrVmRBYnZYei9jckUzelNmMnRxajE0NHhmMWtLazl6eG53M0FRZHBXNTh1U1lFVEtSR2YzTm5qbE56RWRpRFNIRXZvbkd2S0l5dTg" height="75px" alt="" />
                            <br /> <Link className="nav-link" to="/products/ipad">iPad</Link>
                        </li>
                        <li>
                            <img src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-watch-nav-202509_GEO_IN?wid=400&hei=260&fmt=png-alpha&.v=S0tSVzBtSkRkSFFhMm1zS1NmeWtkK0gvNGFhODF5SWpidW9tVnFmL2IrcnZGQmhUaHlPN016cFdzNFJtZThkQ2M5THdmR1U4Nmp4b2NFbEg2N21UQzYzZVFZZGtHNUI4c1NvME1xTTYxSzZ1ZUVMek0rc2U0U3QwOE5USS9PYTQ" height="75px" alt="" />
                            <br /> <Link className="nav-link" to="/products/watch">Apple Watch</Link>
                        </li>
                        <li>
                            <img src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-airpods-nav-202509?wid=400&hei=260&fmt=png-alpha&.v=Q0Z1bWFqMUpRRnp3T0Y0VWJpdk1yMDhFUStvWHB3SDlDa3VrdUZORWRqeld1aTN5QlRYNG5PRjJxc2d1RklXbVM0TjRWdzF2UjRGVEY0c3dBQVZ6VGZUMjJQZFhhT2thWmkxZjhra3FyZEk" height="75px" alt="" />
                            <br /><Link className="nav-link" to="/products/airpods">AirPods</Link>
                        </li>
                        <li>
                            <img src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-airtags-nav-202601_GEO_IN?wid=400&hei=260&fmt=png-alpha&.v=Q0Z1bWFqMUpRRnp3T0Y0VWJpdk1yL1FqZ2pobDV2bDUyWU1XVmNnMmx3UUdvUzdNVnRJWFZUbkZkSEFxU1M1YWlRT3o4dCtSOG5URzZBQk51WVJZNG1ZT05aMG1qOXJGam1odE5PQXNEK3hoZmhNRWMyTWI4VWg3NDM1QXBxeWs" height="75px" alt="" />
                            <br />AirTag
                        </li>
                        <li>
                            <img src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=T0wvM1N3YUcxQ09qK0VNRkl1RU1BZFM5WnN0RmVZRmVXQ0FCUWJjbnJDald1aTN5QlRYNG5PRjJxc2d1RklXbVM0TjRWdzF2UjRGVEY0c3dBQVZ6VFZ3YmJrVi9SakQxWUcrYWQwVXc5VTA" height="75px" alt="" />
                            <br />Apple TV 4K
                        </li>
                        <li>
                            <img src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-homepod-nav-202301?wid=400&hei=260&fmt=png-alpha&.v=WVcvamRucHVMMWs5SXZ3bVJ3Q2hpZGR0czFXNWdCUW14eTN2U29pLzNMcld1aTN5QlRYNG5PRjJxc2d1RklXbVM0TjRWdzF2UjRGVEY0c3dBQVZ6VFJmbWU0TjJLamxsdTltNkZVZ1RhbDA" height="75px" alt="" />
                            <br />HomePod
                        </li>
                        <li>
                            <img src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-accessories-nav-202603?wid=400&hei=260&fmt=png-alpha&.v=QnhsNk96S0o4R1dkN2FveStNM1hwNzZGMHVrNGw2NTM5Vmk2bHZzMXQ3aUlac2ROMkdFNG0rMXdMQ0t2WTVlSFBrcjVFNVdueFRVbVY3TGtiL2RjUWVXQ0tWTWFGNXA2NmlzMmRVQ1l6WmlFMHVWQmxPTEFhTVNvVStGSjlxajM" height="75px" alt="" />
                            <br /> <Link className="nav-link" to="/products/accessories">Accessories</Link>
                        </li>
                    </ul>
                </div>
                <div className="container" style={{ paddingTop: '90px' }}>
                    <h2>The latest. Take a look at what’s new right now.</h2>
                    <div
                        style={{
                            display: "flex",
                            overflowX: "auto",
                            gap: "20px",
                            scrollbarWidth: "none",
                            paddingBottom: "10px"
                        }}
                    >
                        {latest.map((item) => (
                            <StoreCard key={item.id} background={item.background} title={item.title} info={item.info} price={item.price} color={item.color} />
                        ))}
                    </div>
                </div>
                <div style={{ height: '480px' }}>
                    <div className="container" style={{ paddingTop: '90px' }}>
                        <h2>The Apple Store difference. Even more reasons to shop with us.</h2>
                    </div>
                    <div style={{ display: 'flex', gap: '25px', overflowX: 'scroll', overflowY: 'hidden', whiteSpace: 'nowrap', scrollbarWidth: "none", marginLeft: '120px' }}>
                        <div style={{ minWidth: "320px", maxWidth: '340px', height: '230px', borderRadius: '15px', backgroundColor: 'white', flexShrink: 0 }}><h3 style={{ padding: '20px', textAlign: 'left', overflowWrap: "break-word", whiteSpace: "normal" }} >No Cost EMI. Plus Instant Cashback.</h3></div>
                        <div style={{ minWidth: "320px", maxWidth: '340px', height: '230px', borderRadius: '15px', backgroundColor: 'white', flexShrink: 0 }}><h3 style={{ padding: '20px', textAlign: 'left', overflowWrap: "break-word", whiteSpace: "normal" }}>Exchange your smartphone, get ₹2500.00-₹57000.00 in credit towards a new one.*</h3></div>
                        <div style={{ minWidth: "320px", maxWidth: '340px', height: '230px', borderRadius: '15px', backgroundColor: 'white', flexShrink: 0 }}><h3 style={{ padding: '20px', textAlign: 'left', overflowWrap: "break-word", whiteSpace: "normal" }}>Customise your Mac.</h3></div>
                        <div style={{ minWidth: "320px", maxWidth: '340px', height: '230px', borderRadius: '15px', backgroundColor: 'white', flexShrink: 0 }}><h3 style={{ padding: '20px', textAlign: 'left', overflowWrap: "break-word", whiteSpace: "normal" }}>Make them yours. Engrave a mix of emoji names and numbers for free.</h3></div>
                        <div style={{ minWidth: "320px", maxWidth: '340px', height: '230px', borderRadius: '15px', backgroundColor: 'white', flexShrink: 0 }}><h3 style={{ padding: '20px', textAlign: 'left', overflowWrap: "break-word", whiteSpace: "normal" }}>Enjoy free delivery, or easy pickup from an Apple Store. </h3></div>
                        <div style={{ minWidth: "320px", maxWidth: '340px', height: '230px', borderRadius: '15px', backgroundColor: 'white', flexShrink: 0 }}><h3 style={{ padding: '20px', textAlign: 'left', overflowWrap: "break-word", whiteSpace: "normal" }}> Trade in your eligible Mac, Apple Watch or iPad for instant credit. In-store only.</h3></div>
                    </div>
                </div>
                <div className="container" style={{
                    color: "gray",
                    paddingTop: "40px",
                    paddingBottom: "40px"
                }}>
                    <p style={{ fontSize: '10px' }}>◊ No Cost EMI is available with the purchase of an eligible product made using qualifying cards on 3- or 6-month tenures from most leading card issuers. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your card issuer, subject to your card issuer’s terms and conditions. Minimum order spend applies as per your card issuer’s threshold. No Cost EMI is not available to Business customers and cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card issuer. Offer may be revised or withdrawn at any time without any prior notice. Terms apply(opens in new window).
                        Footnote ∆ Instant cashback is available with the purchase of an eligible product with qualifying American Express, Axis Bank and ICICI Bank cards only. Minimum transaction value of ₹10001.00 applies. Learn more about instant cashback amounts and eligible devices. Instant cashback is available for up to two orders per rolling 90-day period with an eligible card. Card eligibility is subject to terms and conditions between you and your card issuer. Total transaction value is calculated after any trade-in credit or eligible discount is applied. Any subsequent order adjustment(s) or cancellation(s) may result in instant cashback being recalculated, and any refund may be adjusted to account for instant cashback clawback; this may result in no refund being made to you. Offer may be revised or withdrawn at any time without any prior notice. Additional terms apply.(opens in new window) Instant cashback is not available to Business customers and cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Multiple separate orders cannot be combined for instant cashback.
                        Footnote ± Available to current and newly accepted college students, parents buying for college students, and teachers and staff at all levels. See Terms for more information.
                        Footnote † Listed pricing is Maximum Retail Price (inclusive of all taxes).
                        Footnote ‡ Mac, iPad and Apple Watch trade-in is available only in-store in India. Apple Retail Online in India does not offer trade-in for Mac, iPad and Apple Watch. Trade‑in values will vary based on the condition, year and configuration of your eligible trade‑in device. Not all devices are eligible for credit. You must be at least the age of majority to be eligible to trade in for credit. Trade‑in value may be applied towards a qualifying new device purchase. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In-store trade‑in requires presentation of a valid photo ID (local law may require saving this information). Some stores may have additional requirements. Apple or its trade‑in partners reserve the right to refuse, cancel or limit the quantity of any trade‑in transaction for any reason. More details are available from Apple’s trade‑in partner for trade‑in and recycling of eligible devices. Restrictions and limitations may apply.
                        Footnote ※ New subscribers only. ₹119.00/month after trial. Offer is available for new Apple Music subscribers with a new eligible device for a limited time only. Offer redemption for eligible audio devices requires connecting or pairing to an Apple device running the latest iOS or iPadOS. Offer redemption for Apple Watch requires connecting or pairing to an iPhone running the latest iOS. Offer good for three months after eligible device activation. Only one offer per Apple Account, regardless of the number of eligible devices you purchase. Plan automatically renews until cancelled. Restrictions and other offerterms(opens in new window) apply.
                        Footnote
                        1.
                        Special pricing available to qualified customers. To learn more about how to start qualifying for special pricing, talk to an Apple Specialist in a store or give us a call on 000800 040 1966.
                        Footnote
                        2.
                        Apple Intelligence is available in beta. Some features may not be available in all regions or languages. For feature and language availability and system requirements, see support.apple.com/121115(opens in new window).

                        We use your location to show you delivery options faster. We found your location using your IP address or because you entered it during a previous visit to Apple.

                        Apple
                    </p>
                </div>
            </div>
        </div>
    )
}
