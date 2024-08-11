import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";

export default function Profile() {
  const dispatch = useDispatch();
  const [profile, setProfile] = useState<any>({});
  const navigate = useNavigate();

  const fetchProfile = async () => {
    try {
      const account = await client.profile();
      setProfile(account);
    } catch (err: any) {
      navigate("/Kanbas/Account/Signin");
    }
  };

  const signout = async () => {
    await client.signout();
    dispatch(setCurrentUser(null));
    navigate("/Kanbas/Account/Signin");
  };

  const saveProfile = async () => {
    try {
      const updatedUser = await client.updateUser(profile._id, profile);
      setProfile(updatedUser);
      dispatch(setCurrentUser(updatedUser));
      alert("Profile updated successfully!");
    } catch (err: any) {
      navigate("/Kanbas/Account/Signin");
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div className="wd-profile-screen">
      <h1>Profile</h1>
      {profile && (
        <div className="form-check">
          <input
            className="wd-username form-control mb-2"
            value={profile.username}
            onChange={(e) =>
              setProfile({ ...profile, username: e.target.value })
            }
          />
          <input
            className="wd-password form-control mb-2"
            value={profile.password}
            onChange={(e) =>
              setProfile({ ...profile, password: e.target.value })
            }
          />
          <input
            className="wd-firstname form-control mb-2"
            value={profile.firstName}
            onChange={(e) =>
              setProfile({ ...profile, firstName: e.target.value })
            }
          />
          <input
            className="wd-lastname form-control mb-2"
            value={profile.lastName}
            onChange={(e) =>
              setProfile({ ...profile, lastName: e.target.value })
            }
          />
          <input
            className="wd-dob form-control mb-2"
            value={
              profile.dob &&
              new Date(profile.dob).toISOString().substring(0, 10)
            }
            onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
            type="date"
          />
          <input
            className="wd-email form-control mb-2"
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          />
          <select
            className="wd-role form-control mb-2"
            onChange={(e) => setProfile({ ...profile, role: e.target.value })}
            value={profile.role}
          >
            <option value="STUDENT">Student</option>
            <option value="TA">Teaching Assistant</option>
            <option value="FACULTY">Faculty</option>
          </select>
          <button
            onClick={saveProfile}
            className="wd-save-btn btn btn-secondary w-100 mb-2"
          >
            Save Profile
          </button>
          <button
            onClick={signout}
            className="wd-signout-btn btn btn-danger   w-100"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}
