import { useState } from 'react'
import './App.css'

function App() {

  const[firstName, setFirstName] = useState("");
  const[lastName, setLastName] = useState("");
  const[email, setEmail] = useState(""); 
  const[contect, setContect] = useState("");

  // FOR RADIO BUTTON
  const[gender, setGender] = useState("male");

  // FOR CHECKBOX
  const[subject, setSubject] = useState({
    english: true,
    maths: false,
    physics: false,
  });

  const[resume, setResume] = useState("");

  const handleSubjectChange = (sub) =>{
    setSubject((prev) => ({
      ...prev,
      [sub]: !prev[sub],
    }),);
  }

  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setContect("");
    setGender("male");
    setSubject({
      english: true,
      maths: false,
      physics: false,
    });
    setResume("");
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  const selectedSubjects = Object.keys(subject).filter((key) => subject[key]);

  console.log({
    firstName,
    lastName,
    email,
    contect,
    gender,
    selectedSubjects,
    resume
  });
};



  return (
    <>
      <div className="bg-white py-10 px-5 flex justify-center">
        <div className="bg-cyan-100 w-full max-w-2xl p-8 rounded-xl shadow-md">

          <h1 className="text-3xl font-bold text-cyan-700 text-center mb-8">
            React Form
          </h1>

          <form className="space-y-6">

            {/* FIRST NAME */}
            <div className="flex flex-col">
              <label className="font-semibold text-cyan-700">First Name *</label>
              <input
                type="text"
                className="border border-gray-500 rounded-lg p-2"
                id="firstname"
                value={firstName}
                placeholder="Enter First Name"
                onChange={(e) =>
                  setFirstName(e.target.value)
                }
                required
              />
            </div>

            {/* LAST NAME */}
            <div className="flex flex-col">
              <label className="font-semibold text-cyan-700">Last Name *</label>
              <input
                type="text"
                id='lastname'
                value={lastName}
                className="border border-gray-500 rounded-lg p-2"
                placeholder="Enter Last Name"
                onChange={(e) => 
                  setLastName(e.target.value)
                }
                required
              />
            </div>

            {/* EMAIL */}
            <div className="flex flex-col">
              <label className="font-semibold text-cyan-700">Enter Email *</label>
              <input
                type="text"
                id='email'
                value={email}
                className="border border-gray-500 rounded-lg p-2"
                placeholder="Enter Email"
                onChange={(e) => 
                  setEmail(e.target.value)
                }
                required
              />
            </div>

            {/* CONTACT */}
            <div className="flex flex-col">
              <label className="font-semibold text-cyan-700">Contact *</label>
              <input
                type="text"
                id='contact'
                value={contect}
                className="border border-gray-500 rounded-lg p-2"
                placeholder="Enter Mobile Number"
                onChange={(e) => 
                  setContect(e.target.value)
                }
                required
              />
            </div>

            {/* GENDER */}
            <div className="flex flex-col">
              <label
               className="font-semibold text-cyan-700 mb-1"
               htmlFor='gender'
               >Gender *</label>

              <div className="flex flex-wrap gap-6 mt-1">
                {/* MALE */}
                <label className="flex items-center gap-2">
                  <input type="radio" name="gender" value="male" id='male'
                    className='cursor-pointer'
                    checked={gender==="male"}
                    onChange={(e) => 
                      setGender(e.target.value)
                    } />
                  Male
                </label>

                  {/* FEMALE */}
                <label className="flex items-center gap-2">
                  <input type="radio" name="gender" value="female" id='female'
                    className='cursor-pointer'
                    checked={gender==="female"}
                    onChange={(e) => 
                      setGender(e.target.value)
                    }
                  />
                  Female
                </label>

                  {/* OTHER */}
                <label className="flex items-center gap-2">
                  <input type="radio" name="gender" value="other" id='other' 
                    className='cursor-pointer'
                    checked={gender==="other"}
                    onChange={(e) => 
                      setGender(e.target.value)
                    }
                  />
                  Other
                </label>
              </div>
            </div>

            {/* SUBJECT CHECKBOXES */}
            <div className="flex flex-col">
              <label className="font-semibold text-cyan-700 mb-1">Your Best Subject</label>

              <div className="flex flex-wrap gap-6 mt-1">
                <label className="flex items-center gap-2">
                  <input type="checkbox" id='english' 
                    checked={subject.english===true}
                    onChange={(e) => 
                      handleSubjectChange("english")
                    }
                  />
                  English
                </label>

                <label className="flex items-center gap-2">
                  <input type="checkbox" id='maths' 
                    checked={subject.maths===true}
                    onChange={(e) => 
                      handleSubjectChange("maths")
                    }
                  />
                  Maths
                </label>

                <label className="flex items-center gap-2">
                  <input type="checkbox" id='physics' 
                    checked={subject.physics===true}
                    onChange={(e) => 
                      handleSubjectChange("physics")
                    }
                  />
                  Physics
                </label>
              </div>
            </div>

            {/* FILE UPLOAD */}
            <div className="flex flex-col">
              <label className="font-semibold text-cyan-700 mb-1">Upload Resume *</label>

              <input
                type="file"
                id='file'
                name='file'
                onChange={(e) => 
                  setResume(e.target.files[0])
                }
                className="border border-gray-400 cursor-pointer rounded-sm p-1 w-full"
              />
            </div>

            {/* BUTTONS */}
            <div className="flex justify-center gap-6 mt-6">
              <button 
              className="bg-cyan-500 text-white px-6 py-2 rounded-xl cursor-pointer"
              value="reset"
              onClick={(e) => 
                handleReset()
              }
              >
                Reset
              </button>
              <button 
              className="bg-cyan-500 text-white px-6 py-2 rounded-xl cursor-pointer"
              value='submit'
              onClick={(e) =>
                handleSubmit(e)
              }
              >
                Submit
              </button>
            </div>

          </form>

        </div>
      </div>
    </>
  )
}

export default App
