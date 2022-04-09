import Status from "./Status";

export default {
  title: "Status",
  component: Status,
};

export const Public = () => <Status label="Public" />;
export const Private = () => <Status label="Private" />;
