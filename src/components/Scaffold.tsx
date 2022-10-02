import AdminNFT from "./AdminNFT";
import Background from "./Background";
import SettingModal from "./SettingModal";

interface IScaffoldProp {
  children: React.ReactNode;
}

const Scaffold: React.FC<IScaffoldProp> = ({ children }) => {
  return (
    <>
      <SettingModal />
      <AdminNFT />
      <>{children}</>
      <Background />
    </>
  );
};

export default Scaffold;
