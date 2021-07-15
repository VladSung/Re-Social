import ProfileInfo from './ProfileInfo';

function ProfileInfoContainer({ store }) {
    let state = store.getState()
    return (
        <ProfileInfo
            profile={state.profilePage.profile}
        />
    );
}
export default ProfileInfoContainer;