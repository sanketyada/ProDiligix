import React, { useEffect, useState } from "react";
import mapImg from "../assets/images/map.png";
import { useNavigate } from "react-router-dom";

const countries = [
  { code: "+91", emoji: "🇮🇳", name: "India" },
  { code: "+1", emoji: "🇺🇸", name: "USA" },
  { code: "+44", emoji: "🇬🇧", name: "UK" },
];

const GetStartedForm = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  // Form data
  const [formData, setFormData] = useState({
    companyName: "",
    industry: "",
    otherIndustry: "",
    fullName: "",
    email: "",
    countryCode: "",
    phone: "",
  });

  useEffect(() => {
    setTimeout(() => setVisible(true), 140);
  }, []);

  // handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      industry:
        formData.industry === "other" && formData.otherIndustry
          ? formData.otherIndustry
          : formData.industry,
    };

    console.log("Data ready to send:", payload);

    try {
      const res = await fetch("/api/pincode/276201");
      const result = await res.json();
      navigate("/", { state: { result } });
    } catch (err) {
      console.error("submit error", err);
    }
  };

  return (
    <>
      <style>{`
/* CSS Content */
.get-started-form-wrapper {
  position: relative;
  width: 100%;
  margin-top: -4rem;
  z-index: 10;
  display: flex;
  justify-content: center;
}

.get-started-form {
  background: #fff;
  box-shadow: 0 6px 48px rgba(40, 60, 107, 0.13);
  border-radius: 1.3rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  max-width: 980px;
  width: 96%;
  padding: 2.5rem 3rem 2.5rem 2.2rem;
}

.gs-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 220px;
  max-width: 260px;
  flex: 0 0 230px;
}
.gs-map {
  width: 140px;
  height: 140px;
  border-radius: 24px;
  object-fit: cover;
  box-shadow: 0 2px 18px rgba(35,74,154,0.11);
  margin-bottom: 1.2rem;
}
.gs-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.gs-label {
  font-weight: 600;
  font-size: 1.22rem;
  color: #2443b7;
  margin-bottom: 2px;
}
.gs-label-bold {
  font-weight: 800;
  font-size: 1.32rem;
  color: #13275c;
}

.gs-fields {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.15rem;
}
.gs-row {
  display: flex;
  gap: 1.1rem;
  width: 100%;
}

/* Inputs & selects styling */
.gs-input {
  padding: 0.85rem 1.05rem;
  border-radius: 0.7rem;
  border: 1px solid #d1d7e0;
  background: #f5f8fd;
  outline: none;
  font-size: 1.13rem;
  width: 100%;
  transition: border-color 0.14s;
  color: #232a34;
}

.gs-input::placeholder,
.gs-input-phone::placeholder {
  color: #7e8191;
  opacity: 1;
}

.gs-input option[value=""],
.gs-phone-country option[value=""] {
  color: #7e8191 !important;
}
.gs-input:required:invalid,
.gs-phone-country:required:invalid {
  color: #7e8191;
}
.gs-input:not(:required):not([value=""]),
.gs-phone-country:not(:required):not([value=""]) {
  color: #232a34;
}
.gs-input:focus,
.gs-phone-country:focus,
.gs-input-phone:focus {
  border-color: #2d5dd5;
}

/* Phone pills */
.gs-phone-field {
  display: flex;
  width: 100%;
  align-items: stretch;
  border: 1px solid #d1d7e0;
  border-radius: 0.7rem;
  background: #f5f8fd;
  height: 56px;
  overflow: hidden;
}
.gs-phone-country {
  border: none;
  background: transparent;
  width: 110px;
  min-width: 85px;
  max-width: 135px;
  padding: 0 1.1rem 0 1.1rem;
  font-size: 1.13rem;
  outline: none;
  display: flex;
  align-items: center;
  border-right: 1px solid #d1d7e0;
  color: #232a34;
  appearance: none;
}
.gs-input-phone {
  border: none;
  background: transparent;
  flex: 1;
  padding: 0 1.1rem;
  font-size: 1.13rem;
  outline: none;
  color: #232a34;
  display: flex;
  align-items: center;
}

.gs-button-row {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.gs-submit {
  width: 100%;
  background: #246bed;
  color: #fff;
  font-weight: 700;
  border: none;
  border-radius: 0.85rem;
  padding: 1.1rem 0;
  font-size: 1.19rem;
  cursor: pointer;
  transition: background .19s;
  box-shadow: 0 2px 23px rgba(60, 98, 160, 0.12);
  margin-left: 0;
}
.gs-submit:hover {
  background: #1741a2;
}

/* Responsive */
@media (max-width: 800px) {
  .get-started-form {
    flex-direction: column;
    padding: 1.1rem 1rem;
    gap: 1.1rem;
    max-width: 99vw;
  }
  .gs-info {
    flex-direction: column;
    margin-bottom: 1.2rem;
    min-width: 0;
    max-width: 100%;
    flex: none;
  }
  .gs-map {
    width: 85px;
    height: 85px;
  }
  .gs-row {
    flex-direction: column;
    gap: 0.85rem;
  }
  .gs-fields {
    gap: 0.9rem;
  }
  .gs-button-row {
    width: 100%;
    justify-content: center;
  }
  .gs-submit {
    width: 100%;
  }
  .gs-phone-field {
    height: 44px;
  }
  .gs-phone-country,
  .gs-input-phone {
    font-size: 1rem;
    height: 44px;
  }
  .gs-phone-country {
    width: 70px;
    min-width: 55px;
    max-width: 90px;
  }
}

.industry-group {
  display: flex;
  gap: 1.1rem; /* match .gs-row gap */
  width: 100%;
  align-items: center;
}
.industry-group .gs-input {
  /* ensure select and other text input behave like original inputs */
  margin: 0;
  min-width: 0;
}

@media (max-width: 800px) {
  .industry-group {
    flex-direction: column;
    gap: 0.85rem;
  }
}
      `}</style>

      <div className="get-started-form-wrapper">
        <div
          className={`get-started-form animated-fade-in${visible ? " active" : ""}`}
        >
          <div className="gs-info">
            <img src={mapImg} alt="World map" className="gs-map" />
            <div className="gs-title">
              <span className="gs-label">Ready to get</span>
              <span className="gs-label-bold">started?</span>
            </div>
          </div>

          <form className="gs-fields" onSubmit={handleSubmit}>
            <div className="gs-row">
              <input
                type="text"
                name="companyName"
                className="gs-input"
                placeholder="Company Name*"
                value={formData.companyName}
                onChange={handleChange}
                required
              />

              <div className="industry-group">
                <select
                  name="industry"
                  required
                  className="gs-input"
                  value={formData.industry}
                  onChange={handleChange}
                >
                  <option value="" disabled hidden>
                    Select Industry Solutions*
                  </option>
                  <option value="it">IT Industry</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="ecommerce">eCommerce</option>
                  <option value="fmcg">FMCG</option>
                  <option value="service">Service Sectore</option>
                  <option value="other">Other</option>
                </select>

                {formData.industry === "other" && (
                  <input
                    type="text"
                    name="otherIndustry"
                    className="gs-input"
                    placeholder="Please specify your industry*"
                    value={formData.otherIndustry}
                    onChange={handleChange}
                    required
                  />
                )}
              </div>
            </div>

            <div className="gs-row">
              <input
                type="text"
                name="fullName"
                className="gs-input"
                placeholder="Your Name*"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                className="gs-input"
                placeholder="Work Email*"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="gs-row">
              <div className="gs-phone-field">
                <select
                  name="countryCode"
                  required
                  className="gs-phone-country "
                  value={formData.countryCode}
                  onChange={handleChange}
                >
                  <option value="" disabled hidden>
                    Select
                  </option>
                  {countries.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.emoji} {c.code}
                    </option>
                  ))}
                </select>

                <input
                  type="tel"
                  name="phone"
                  className="gs-input-phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  autoComplete="tel"
                />
              </div>
            </div>

            <div className="gs-button-row">
              <button type="submit" className="gs-submit">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default GetStartedForm;
