import AdminNFT from "./AdminNFT";
import Background from "./Background";
import SettingModal from "./SettingModal";
import Terminal from "./TerminalModal";

interface IScaffoldProp {
  children: React.ReactNode;
}

const Scaffold: React.FC<IScaffoldProp> = ({ children }) => {
  return (
    <>
      <SettingModal />
      <AdminNFT />
      <Terminal />
      <>{children}</>
      <Background />
    </>
  );
};

export default Scaffold;
