import {useState} from "react";
import s from "./ProfileInfo.module.css";

const ProfileStatus = ({ user, updateStatus }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [statusText, setStatusText] = useState("");

    if (!user) return null;

    const handleStartEditing = () => {
        setStatusText(user.status_text);
        setIsEditing(true);
    };

    return (
        <div className={s.statusWrapper}>
            {isEditing ? (
                <input
                    className={s.statusInput}
                    autoFocus
                    value={statusText}
                    placeholder="Нет статуса"
                    onChange={(e) => setStatusText(e.target.value)}
                    onBlur={() => {
                        setIsEditing(false);
                        updateStatus(statusText).catch((error) => {
                            console.error(error);
                        })
                    }}
                />
            ) : (
                <span className={s.statusText} onDoubleClick={handleStartEditing}>
                    {user.status_text || "Нет статуса"}
                </span>
            )}
        </div>
    );
};

export default ProfileStatus;
