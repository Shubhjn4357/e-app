"use client";
// import DataControl from "@/components/dashboard/DataControl";
// import { Button } from "@/components/ui/button";
// import { getUsersBy } from "@/data/user";
// import { User } from "@prisma/client";
// import { useEffect, useState } from "react";
// import { IoClose } from "react-icons/io5";
// import {
//   Menu,
//   MenuItem,
//   MenuItemProps,
// } from "@/components/dashboard/ControlMenu";
// import { FaRegPenToSquare, FaTrash } from "react-icons/fa6";
// import ConfirmDialog from "@/components/confirmDialog";

// const DashboardPage = () => {

//   const [users, setUsers] = useState<User[]>();
//   const [selected, setSelected] = useState<User>();
//   useEffect(() => {
//     async function getUser() {
//       const users = await getUsersBy();
//       setUsers(users);
//     }
//     getUser();
//   }, []);

//   const DeleteControl = (
//     <ConfirmDialog
//       variant="destructive"
//       triggerButton={
//         <Button size="icon" radius="full" variant="destructive">
//           <FaTrash />
//         </Button>
//       }
//       onCancel={() => console.log(false)}
//       onConfirm={() => console.log(true)}
//       title="Are You Sure?"
//       description="This action cannot be undone. It will Delete Your Data"
//     />
//   );
//   const EditControl = (
//     <ConfirmDialog
//       triggerButton={
//         <Button size="icon" variant="ghost" radius="full">
//           <FaRegPenToSquare />
//         </Button>
//       }
//       onCancel={() => console.log(false)}
//       onConfirm={() => console.log(true)}
//       title="Are You Sure?"
//     />
//   );
//   const menuControls: MenuItemProps[] = [
//     {
//       label: "Edit",
//       icon: EditControl,
//     },
//     {
//       label: "Delete",
//       icon: DeleteControl,
//       variant: "destructive",
//     },
//   ];

//   return (
//     <>
//       {selected ? (
//         <div className="flex justify-start items-center w-full bg-accent backdrop-blur-md rounded-full my-2">
//           <Menu className="flex justify-between gap-4">
//             <Button
//               size="icon"
//               variant="ghost"
//               radius="full"
//               onClick={() => setSelected(undefined)}
//             >
//               <IoClose />
//             </Button>
//             <span className="p-2">{selected.name}</span>
//             {menuControls.map((i, index) => (
//               <MenuItem
//                 asChild
//                 isIconOnly
//                 key={index}
//                 label={i.label}
//                 icon={i.icon}
//                 variant={i?.variant}
//               />
//             ))}
//           </Menu>
//         </div>
//       ) : (
//         <div className="flex justify-start items-center w-full bg-secondary rounded-full my-2">
//           <Menu className="flex justify-between gap-4">
//               <span className="py-2 px-8">
//                 Select User
//                 {/* Todo Filter */}
//               </span>
//           </Menu>
//         </div>
//       )}
//       {users && (
//         <DataControl
//           data={users}
//           selected={selected}
//           setSelected={setSelected}
//         />
//       )}
//     </>
//   );
// };

// export default DashboardPage;





const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;