const UserAvatar = ({ name }: { name: string }) => {
  return (
    <div
      className="rounded-[50%] w-7 h-7 flex items-center justify-center bg-red-500 text-white"
      data-testid="userAvatar"
    >
      {name?.[0]?.toUpperCase()}
    </div>
  );
};

export default UserAvatar;
