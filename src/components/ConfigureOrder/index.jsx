import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
function ConfigureOrder() {
  let extraStrutsToShow=false;
  const [assemblyType, setAssemblyType] = useState("Complete Door");
  const [widthFt, setWidthFt] = useState("8 ft");
  const [widthIn, setWidthIn] = useState("2 in.");
  const [heightFt, setHeightFt] = useState("8 ft");
  const [heightIn, setHeightIn] = useState("2 in.");
  const [windcodeW1, setWindcodeW1] = useState("WindCode W1");
  const [design, setDesign] = useState("CC");
  const [darkFinish, setDarkFinish] = useState("Dark Finish");
  const [glassType, setGlassType] = useState("Solid (No Windows)");
  const [sectionGlazed, setSectionGlazed] = useState("Sections 4");
  const [framing, setFraming] = useState("Arch 1 Design");
  const [spring, setSpring] = useState("Galvanized Torsion");
  const [trackSize, setTrackSize] = useState("2” Flag & Jamb Brackets Loose");
  const [trackMount, setTrackMount] = useState("Bracket");
  const [trackLift, setTrackLift] = useState("Standard");
  const [trackRadius, setTrackRadius] = useState("12” Radius");
  const [spearLiftHandles, setSpearLiftHandles] = useState(false);
  const [slideLockMountedAt, setSlideLockMountedAt] = useState(false);
  const [lock, setLock] = useState("Inside Slide Lock (#2)");
  const [miscLockOptions, setMiscLockOptions] = useState(false);
  const [packaging, setPackaging] = useState("[x] Distributor");
  const [extraStruts, setExtraStruts] = useState(false);
  const [spadeStrapHinge, setSpadeStrapHinge] = useState(false);
  const [quietHinge, setQuietHinge] = useState(false);
  const [lightSealKit, setLightSealKit] = useState(false);
  const [lessBottomAstragal, setLessBottomAstragal] = useState(false);
  const [medallionHardware, setMedallionHardware] = useState(false);
  const [goldBar, setGoldBar] = useState(false);
  const [extraStrutsOption, setExtraStrutsOption] = useState("");

  useEffect(() => {
    setAssemblyType(localStorage.getItem("assemblyType") || "Complete Door");
    setWidthFt(localStorage.getItem("widthFt") || "8 ft");
    setWidthIn(localStorage.getItem("widthIn") || "2 in.");
    setHeightFt(localStorage.getItem("heightFt") || "8 ft");
    setHeightIn(localStorage.getItem("heightIn") || "2 in.");
    setWindcodeW1(localStorage.getItem("windcodeW1") || "WindCode W1");
    setDesign(localStorage.getItem("design") || "CC");
    setDarkFinish(localStorage.getItem("darkFinish") || "Dark Finish");
    setGlassType(localStorage.getItem("glassType") || "Solid (No Windows)");
    setSectionGlazed(localStorage.getItem("sectionGlazed") || "Sections 4");
    setFraming(localStorage.getItem("framing") || "Arch 1 Design");
    setSpring(localStorage.getItem("spring") || "Galvanized Torsion");
    setTrackSize(
      localStorage.getItem("trackSize") || "2” Flag & Jamb Brackets Loose"
    );
    setTrackMount(localStorage.getItem("trackMount") || "Bracket");
    setTrackLift(localStorage.getItem("trackLift") || "Standard");
    setTrackRadius(localStorage.getItem("trackRadius") || "12” Radius");
    setSpearLiftHandles(localStorage.getItem("spearLiftHandles") === "true");
    setSlideLockMountedAt(
      localStorage.getItem("slideLockMountedAt") === "true"
    );
    setLock(localStorage.getItem("lock") || "Inside Slide Lock (#2)");
    setMiscLockOptions(localStorage.getItem("miscLockOptions") === "true");
    setPackaging(localStorage.getItem("packaging") || "[x] Distributor");
    setExtraStruts(localStorage.getItem("extraStruts") === "true");
    if(localStorage.getItem("extraStruts") === "true"){
      extraStrutsToShow=true;
    }
    setSpadeStrapHinge(localStorage.getItem("spadeStrapHinge") === "true");
    setQuietHinge(localStorage.getItem("quietHinge") === "true");
    setLightSealKit(localStorage.getItem("lightSealKit") === "true");
    setLessBottomAstragal(
      localStorage.getItem("lessBottomAstragal") === "true"
    );
    setMedallionHardware(localStorage.getItem("medallionHardware") === "true");
    setGoldBar(localStorage.getItem("goldBar") === "true");
    setExtraStrutsOption(localStorage.getItem("extraStrutsOption") || "");
  }, []);

  const saveFormData = () => {
    localStorage.setItem("assemblyType", assemblyType);
    localStorage.setItem("widthFt", widthFt);
    localStorage.setItem("widthIn", widthIn);
    localStorage.setItem("heightFt", heightFt);
    localStorage.setItem("heightIn", heightIn);
    localStorage.setItem("windcodeW1", windcodeW1);
    localStorage.setItem("design", design);
    localStorage.setItem("darkFinish", darkFinish);
    localStorage.setItem("glassType", glassType);
    localStorage.setItem("sectionGlazed", sectionGlazed);
    localStorage.setItem("framing", framing);
    localStorage.setItem("spring", spring);
    localStorage.setItem("trackSize", trackSize);
    localStorage.setItem("trackMount", trackMount);
    localStorage.setItem("trackLift", trackLift);
    localStorage.setItem("trackRadius", trackRadius);
    localStorage.setItem("spearLiftHandles", spearLiftHandles.toString());
    localStorage.setItem("slideLockMountedAt", slideLockMountedAt.toString());
    localStorage.setItem("lock", lock);
    localStorage.setItem("miscLockOptions", miscLockOptions.toString());
    localStorage.setItem("packaging", packaging);
    localStorage.setItem("extraStruts", extraStruts.toString());
    localStorage.setItem("spadeStrapHinge", spadeStrapHinge.toString());
    localStorage.setItem("quietHinge", quietHinge.toString());
    localStorage.setItem("lightSealKit", lightSealKit.toString());
    localStorage.setItem("lessBottomAstragal", lessBottomAstragal.toString());
    localStorage.setItem("medallionHardware", medallionHardware.toString());
    localStorage.setItem("goldBar", goldBar.toString());
    localStorage.setItem("extraStrutsOption", extraStrutsOption);
    window.location.href="/preview";
  };

  const navigate = useNavigate();
  let progressBar = 0;
  const handleDivClick = (event) => {
    const clickedElementId = event.currentTarget.id;
    if (clickedElementId == "layout_options") {
      progressBar = 0;
      progressBar += 25;
    } else if (clickedElementId == "window_options") {
      progressBar = 0;
      progressBar += 50;
    } else if (clickedElementId == "track_options") {
      progressBar = 0;
      progressBar += 75;
    } else {
      progressBar = 0;
      progressBar += 100;
    }
    document.getElementById("form_progress_style").style.width =
      progressBar + "%";
    document.getElementById("form_progress").textContent =
      progressBar + "% Completed";
  };

  const extraStrutsOptionValue = (isChecked) => {
    const extraStrutsOptionsDiv = document.getElementById("extra_struts_options");
  
    if (isChecked) {
      extraStrutsOptionsDiv.style.display = "block";
    } else {
      setExtraStrutsOption("");
      extraStrutsOptionsDiv.style.display = "none";
    }
  };
  

  return (
    <div className="container-fluid" style={{ backgroundColor: "#dee2e6" }}>
      <div className="row background-div align-items-center">
        <div className="col-md-5">
          <a>
            <i
              className="px-3 bi bi-arrow-left"
              onClick={() => navigate("/addOrder")}
            ></i>{" "}
            Configure a new door{" "}
            <span className="mx-2" style={{ fontSize: " 14px" }}>
              2 of 3
            </span>
          </a>
        </div>
        <div className="col-md-6 text-end">
          <i className=" bi bi-three-dots-vertical"></i>
        </div>
      </div>
      <div className="row justify-content-center mt-2">
        <div className="col-md-3">
          <div
            className="progress"
            style={{ height: "10px" }}
            id="form_progress_div"
          >
            <div
              id="form_progress_style"
              className="progress-bar bg-success"
              style={{ width: `${progressBar}px` }}
              role="progressbar"
              aria-valuenow="0"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div className="text-center" id="form_progress">
            {progressBar}% Completed
          </div>
        </div>
      </div>
      <div className="row mt-3 justify-content-center g-3">
        <div className="col-md-8" id="layout_options" onClick={handleDivClick}>
          <div className="card">
            <div className="card-header card-header-bg">
              <strong>Layout Options</strong>
            </div>
            <div className="card-body">
              <div className="row justify-content-center">
                <div className="col-md-10">
                  <div className="row mt-2 mb-2">
                    <div className="col-md-4">
                      <label>Assembly Type</label>
                    </div>
                    <div className="col-md-8">
                      <select
                        name="assembly_type"
                        id="assembly_type"
                        className="form-control"
                        value={assemblyType}
                        onChange={(e) => setAssemblyType(e.target.value)}
                      >
                        <option value="Complete Door">Complete Door</option>
                        <option value="Half Door">Half Door</option>
                      </select>
                    </div>
                  </div>
                  <div className="row mt-2 mb-2">
                    <div className="col-md-4">
                      <label>Measure Size</label>
                    </div>
                    <div className="col-md-8">
                      <div className="row align-items-center mt-2 mb-2">
                        <div className="col-md-4">
                          <label>Width</label>
                        </div>
                        <div className="col-md-4">
                          <select
                            name="width_ft"
                            id="width_ft"
                            className="form-control"
                            value={widthFt}
                            onChange={(e) => setWidthFt(e.target.value)}
                          >
                            <option value="8 ft">8 ft</option>
                          </select>
                        </div>
                        <div className="col-md-4">
                          <select
                            name="width_in"
                            id="width_in"
                            className="form-control"
                            value={widthIn}
                            onChange={(e) => setWidthIn(e.target.value)}
                          >
                            <option value="2 in.">2 in.</option>
                          </select>
                        </div>
                      </div>
                      <div className="row align-items-center mt-2 mb-2">
                        <div className="col-md-4">
                          <label>Height</label>
                        </div>
                        <div className="col-md-4">
                          <select
                            className="form-control"
                            name="height_ft"
                            id="height_ft"
                            value={heightFt}
                            onChange={(e) => setHeightFt(e.target.value)}
                          >
                            <option value="6 ft">8 ft</option>
                          </select>
                        </div>
                        <div className="col-md-4">
                          <select
                            className="form-control"
                            name="height_in"
                            id="height_in"
                            value={heightIn}
                            onChange={(e) => setHeightIn(e.target.value)}
                          >
                            <option value="0 in.">2 in.</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-2 mb-2">
                    <div className="col-md-4">
                      <label>Windcode</label>
                    </div>
                    <div className="col-md-8">
                      <select
                        name="windcode_w1"
                        id="windcode_w1"
                        className="form-control"
                        value={windcodeW1}
                        onChange={(e) => setWindcodeW1(e.target.value)}
                      >
                        <option value="WindCode W1">WindCode W1</option>
                      </select>
                    </div>
                  </div>
                  <div className="row mt-2 mb-2">
                    <div className="col-md-4">
                      <label>Design</label>
                    </div>
                    <div className="col-md-8">
                      <select
                        name="design"
                        id="design"
                        className="form-control"
                        value={design}
                        onChange={(e) => setDesign(e.target.value)}
                      >
                        <option value="CC">CC</option>
                      </select>
                    </div>
                  </div>
                  <div className="row mt-2 mb-2">
                    <div className="col-md-4">
                      <label>Color</label>
                    </div>
                    <div className="col-md-8">
                      <select
                        name="dark_finish"
                        id="dark_finish"
                        className="form-control"
                        value={darkFinish}
                        onChange={(e) => setDarkFinish(e.target.value)}
                      >
                        <option value="Dark Finish">Dark Finish</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8" id="window_options" onClick={handleDivClick}>
          <div className="card">
            <div className="card-header card-header-bg">
              <strong>Window Options</strong>
            </div>
            <div className="card-body">
              <div className="row justify-content-center">
                <div className="col-md-10">
                  <div className="row mt-2 mb-2">
                    <div className="col-md-4">
                      <label>Glass Type</label>
                    </div>
                    <div className="col-md-8">
                      <select
                        name="glass_type"
                        id="glass_type"
                        className="form-control"
                        value={glassType}
                        onChange={(e) => setGlassType(e.target.value)}
                      >
                        <option value="Solid (No Windows)">
                          Solid (No Windows)
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="row mt-2 mb-2">
                    <div className="col-md-4">
                      <label>Section(s) Glazed</label>
                    </div>
                    <div className="col-md-8">
                      <select
                        name="section_glazed"
                        id="section_glazed"
                        className="form-control"
                        value={sectionGlazed}
                        onChange={(e) => setSectionGlazed(e.target.value)}
                      >
                        <option value="Sections 4">Sections 4</option>
                      </select>
                    </div>
                  </div>
                  <div className="row mt-2 mb-2">
                    <div className="col-md-4">
                      <label>Framing</label>
                    </div>
                    <div className="col-md-8">
                      <select
                        name="framing"
                        id="framing"
                        className="form-control"
                        value={framing}
                        onChange={(e) => setFraming(e.target.value)}
                      >
                        <option value="Arch 1 Design">Arch 1 Design</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8" id="track_options" onClick={handleDivClick}>
          <div className="card">
            <div className="card-header card-header-bg">
              <strong>Track Options</strong>
            </div>
            <div className="card-body">
              <div className="row justify-content-center">
                <div className="col-md-10">
                  <div className="row mt-2 mb-2">
                    <div className="col-md-4">
                      <label>Spring</label>
                    </div>
                    <div className="col-md-8">
                      <select
                        name="spring"
                        id="spring"
                        className="form-control"
                        value={spring}
                        onChange={(e) => setSpring(e.target.value)}
                      >
                        <option value="Galvanized Torsion">
                          Galvanized Torsion
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="row mt-2 mb-2">
                    <div className="col-md-4">
                      <label>Track Size</label>
                    </div>
                    <div className="col-md-8">
                      <select
                        name="track_size"
                        id="track_size"
                        className="form-control"
                        value={trackSize}
                        onChange={(e) => setTrackSize(e.target.value)}
                      >
                        <option value="2” Flag & Jamb Brackets Loose">
                          2” Flag & Jamb Brackets Loose
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="row mt-2 mb-2">
                    <div className="col-md-4">
                      <label>Track Mount</label>
                    </div>
                    <div className="col-md-8">
                      <select
                        name="track_mount"
                        id="track_mount"
                        className="form-control"
                        value={trackMount}
                        onChange={(e) => setTrackMount(e.target.value)}
                      >
                        <option value="Bracket">Bracket</option>
                      </select>
                    </div>
                  </div>
                  <div className="row mt-2 mb-2">
                    <div className="col-md-4">
                      <label>Track Lift</label>
                    </div>
                    <div className="col-md-8">
                      <select
                        name="track_lift"
                        id="track_lift"
                        className="form-control"
                        value={trackLift}
                        onChange={(e) => setTrackLift(e.target.value)}
                      >
                        <option value="Standard">Standard</option>
                      </select>
                    </div>
                  </div>
                  <div className="row mt-2 mb-2">
                    <div className="col-md-4">
                      <label>Track Radius</label>
                    </div>
                    <div className="col-md-8">
                      <select
                        name="track_radius"
                        id="track_radius"
                        className="form-control"
                        value={trackRadius}
                        onChange={(e) => setTrackRadius(e.target.value)}
                      >
                        <option value="12” Radius">12” Radius</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-md-8 pt-2"
          id="other_options"
          onClick={handleDivClick}
        >
          <div className="card">
            <div className="card-header card-header-bg">
              <strong>Other Options</strong>
            </div>
            <div className="card-body">
              <div className="row justify-content-center">
                <div className="col-md-10">
                  <div className="row mt-2 mb-2">
                    <div className="col-md-4">
                      <label>Lock</label>
                    </div>
                    <div className="col-md-8">
                      <select
                        name="lock"
                        id="lock"
                        className="form-control"
                        value={lock}
                        onChange={(e) => setLock(e.target.value)}
                      >
                        <option value="Inside Slide Lock (#2)">
                          Inside Slide Lock (#2)
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="row mt-2 mb-2">
                    <div className="col-md-4">
                      <label>MISC Lock Options</label>
                    </div>
                    <div className="col-md-8">
                      <input
                        type="radio"
                        name="misc_lock_options"
                        id="misc_lock_options"
                        checked={miscLockOptions}
                        onChange={(e) => setMiscLockOptions(true)}
                      />{" "}
                      No Lock Hole
                    </div>
                  </div>
                  <div className="row mt-2 mb-2">
                    <div className="col-md-4">
                      <label>Packaging</label>
                    </div>
                    <div className="col-md-8">
                      <select
                        name="packaging"
                        id="packaging"
                        className="form-control"
                        value={packaging}
                        onChange={(e) => setPackaging(e.target.value)}
                      >
                        <option value="[x] Distributor">[x] Distributor</option>
                      </select>
                      <p className="text-danger small">
                        <i className="bi bi-exclamation-circle-fill"></i> Clopay
                        CWD Models Excludes Packaging Options
                      </p>
                    </div>
                  </div>
                  <div className="row mt-2 mb-2">
                    <div className="col-md-4">
                      <label>Additional Options</label>
                    </div>
                    <div className="col-md-8">
                      <div className="row">
                        <div className="col-md-8">
                          <div className="row">
                            <div className="col-md-12">
                              <input
                                type="checkbox"
                                id="extra_struts"
                                name="extra_struts"
                                checked={extraStruts}
                                onChange={(e) => {
                                  setExtraStruts(e.target.checked);
                                  extraStrutsOptionValue(e.target.checked);
                                }}
                              />{" "}
                              Extra Strut(s)
                            </div>
                            <div className="col-md-12">
                              <input
                                type="checkbox"
                                value="Yes"
                                id="spade_strap_hinge"
                                name="spade_strap_hinge"
                                checked={spadeStrapHinge}
                                onChange={(e) =>
                                  setSpadeStrapHinge(e.target.checked)
                                }
                              />{" "}
                              Spade Strap Hinge(s)
                            </div>
                            <div className="col-md-12">
                              <input
                                type="checkbox"
                                value="Yes"
                                id="quiet_hinge"
                                name="quiet_hinge"
                                checked={quietHinge}
                                onChange={(e) =>
                                  setQuietHinge(e.target.checked)
                                }
                              />{" "}
                              14 GA Quiet Hinge
                            </div>
                            <div className="col-md-12">
                              <input
                                type="checkbox"
                                value="Yes"
                                id="less_bottom_astragal"
                                name="less_bottom_astragal"
                                checked={lessBottomAstragal}
                                onChange={(e) =>
                                  setLessBottomAstragal(e.target.checked)
                                }
                              />{" "}
                              Less Bottom Astragal
                            </div>
                            <div className="col-md-12">
                              <input
                                type="checkbox"
                                value="Yes"
                                id="gold_bar"
                                name="gold_bar"
                                checked={goldBar}
                                onChange={(e) => setGoldBar(e.target.checked)}
                              />{" "}
                              Gold Bar Gurantee (Select Dealers )
                            </div>
                            <div className="col-md-12">
                              <input
                                type="checkbox"
                                value="Yes"
                                id="medallion_hardware"
                                checked={medallionHardware}
                                onChange={(e) =>
                                  setMedallionHardware(e.target.checked)
                                }
                              />{" "}
                              Medallion Hardware Upgrade
                            </div>
                            <div className="col-md-12">
                              <input
                                type="checkbox"
                                value="Yes"
                                checked={lightSealKit}
                                id="light_seal_kit"
                                onChange={(e) =>
                                  setLightSealKit(e.target.checked)
                                }
                              />{" "}
                              Light Seal Kit
                            </div>
                            <div className="col-md-12">
                              <input
                                type="checkbox"
                                id="slide_lock_mounted_at"
                                value="Yes"
                                checked={slideLockMountedAt}
                                onChange={(e) =>
                                  setSlideLockMountedAt(e.target.checked)
                                }
                              />{" "}
                              Slide Lock Mounted at 54”
                            </div>
                            <div className="col-md-12">
                              <input
                                type="checkbox"
                                value="Yes"
                                id="spear_lift_handles"
                                name="spear_lift_handles"
                                checked={spearLiftHandles}
                                onChange={(e) =>
                                  setSpearLiftHandles(e.target.checked)
                                }
                              />{" "}
                              2 Spear Lift Handles
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <select
                            name="extra_struts_options"
                            id="extra_struts_options"
                            className="form-control"
                            value={extraStrutsOption}
                            onChange={(e) =>
                              setExtraStrutsOption(e.target.value)
                            }
                          >
                            <option value="0">0 Extra Struts</option>
                            <option value="1">1 Extra Struts</option>
                            <option value="2">2 Extra Struts</option>
                            <option value="3">3 Extra Struts</option>
                            <option value="4">4 Extra Struts</option>
                            <option value="5">5 Extra Struts</option>
                            <option value="6">6 Extra Struts</option>
                            <option value="7">7 Extra Struts</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card mt-2" style={{ borderRadius: "20px 20px 0 0" }}>
            <div className="card-body">
              <div className="row justify-content-end">
                <div className="col-md-12 text-end">
                  <Link
                    to="/preview"
                    className="btn btn-outline mr-2"
                    style={{
                      color: "rgba(102, 51, 43, 1)",
                      border: "2px solid rgba(102, 51, 43, 1)",
                    }}
                  >
                    PREVIEW
                  </Link>
                  <button
                    type="button"
                    className="btn mx-2 configure_custom_background"
                    onClick={saveFormData}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfigureOrder;
