import React, { useCallback } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaArrowUp,FaArrowDown, FaUser } from "react-icons/fa";
import { User } from "@prisma/client";
import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation";

const DataControl = ({
  data,
  selected,
  setSelected,
}: {
  data: User[];
  selected: User | undefined;
  setSelected: React.Dispatch<React.SetStateAction<User | undefined>>;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const { sort } = useParams();
  const searchParams = useSearchParams();
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  return (
    <>
      <div
        className={`py-2 px-8 w-full hover:bg-background/20 border-b grid grid-cols-7 gap-2 place-items-center`}
      >
        <span className="min-w-20 max-w-96 truncate">no.</span>
        <span className="min-w-20 max-w-96 truncate">avatar</span>
        <span
          className="min-w-20 max-w-96 truncate"
          onClick={() => {
            // <pathname>?sort=asc
            router.push(pathname + "?" + createQueryString("sort",sort==="asc"?"asc":"desc" ));
          }}
        >
          name {sort==="asc"?<FaArrowUp/>:<FaArrowDown/>}
        </span>
        <span className="min-w-20 max-w-96 truncate">email</span>
        <span className="min-w-20 max-w-96 truncate">two factor</span>
        <span className="min-w-20 max-w-96 truncate">role</span>
        <span className="min-w-20 max-w-96 truncate">verified</span>
      </div>
      {data.map((fields, index) => {
        const {
          id,
          name,
          email,
          isTwoFactorEnabled,
          role,
          emailVerified,
          image,
        } = fields;
        return (
          <div
            className={`py-2 px-8 hover:bg-background/20 ${
              selected?.id === id && "bg-accent"
            } cursor-pointer border-b grid grid-cols-7 gap-2 place-items-center w-fit`}
            onClick={() => {
              setSelected(selected?.id === id ? undefined : fields);
            }}
            key={id}
          >
            <span className="min-w-20 max-w-96 truncate w-max">
              {index + 1}
            </span>
            <span className="min-w-20 max-w-96 truncate w-max">
              <Avatar>
                <AvatarImage src={image || ""} />
                <AvatarFallback className="bg-gradient">
                  <FaUser />
                </AvatarFallback>
              </Avatar>
            </span>
            <span className="min-w-20 max-w-96 truncate w-max">{name}</span>
            <span className="min-w-20 max-w-96 truncate w-max">{email}</span>
            <span className="min-w-20 max-w-96 truncate w-max">
              {isTwoFactorEnabled ? "Yes" : "No"}
            </span>
            <span className="min-w-20 max-w-96 truncate w-max">{role}</span>
            <span className="min-w-20 max-w-96 truncate w-max">
              {emailVerified ? "Yes" : "No"}
            </span>
          </div>
        );
      })}
    </>
  );
};

export default DataControl;
