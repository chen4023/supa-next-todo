// sharedUserFullName: 공유한 사람의 이름
import { IoShareSocialOutline } from "react-icons/io5";
import { useCopyToClipboard } from "usehooks-ts";

export default function TodoList({
  sharedUserFullName = "",
  ownerUserId = "",
}) {
  const [copiedText, copy] = useCopyToClipboard();
  // 클립보드 카피 -> usehooks 라이브러리
  const handleCopy = () => {
    const shareLink = `${"todoList 공유할 링크"}/share/${ownerUserId}`;
    copy(shareLink)
      .then(() => {
        console.log(`공유 링크 복사 완료 : ${shareLink}`);
      })
      .catch((error) => {
        console.error("Failed to copy!", error);
      });
  };
  return (
    <section className=" min-h-[70vh] bg-[#69CFCF]">
      <div className=" w-full max-w-[800px] p-[20px] mx-auto">
        <article className="flex justify-between items-center">
          <div className="font-bold text-[32px]">
            {sharedUserFullName && <div>{sharedUserFullName}</div>}
            Things to do:
          </div>
          <div
            onClick={() => handleCopy()}
            className="font-bold text-[18px] flex items-center gap-1 cursor-pointer"
          >
            share
            <IoShareSocialOutline />
          </div>
        </article>
      </div>
    </section>
  );
}
