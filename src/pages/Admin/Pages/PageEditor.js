import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const ItemType = "BLOCK";

const mockPages = {
    home: [
        { id: 1, type: "text", content: "Chào mừng đến với trang chủ!" },
        { id: 2, type: "image", url: "https://via.placeholder.com/600x300" },
        { id: 3, type: "text", content: "Đây là nội dung mô tả trang chủ." },
    ],
    contact: [
        { id: 1, type: "text", content: "Liên hệ với chúng tôi qua email: contact@example.com" },
        { id: 2, type: "image", url: "https://via.placeholder.com/400x200" },
        { id: 3, type: "text", content: "Hoặc gọi đến số điện thoại: 0123-456-789" },
    ],
};

const Block = ({ block, index, moveBlock, updateContent, isEditing }) => {
    const [, ref] = useDrag({ type: ItemType, item: { index } });
    const [, drop] = useDrop({
        accept: ItemType,
        hover: (draggedItem) => {
            if (draggedItem.index !== index) {
                moveBlock(draggedItem.index, index);
                draggedItem.index = index;
            }
        },
    });

    return (
        <div ref={(node) => ref(drop(node))} className="p-2 border mb-2 bg-white shadow">
            {block.type === "text" && (
                isEditing ? (
                    <textarea
                        className="w-full border p-1"
                        value={block.content}
                        onChange={(e) => updateContent(index, e.target.value)}
                    />
                ) : (
                    <p>{block.content}</p>
                )
            )}
            {block.type === "image" && <img src={block.url} alt="" className="w-full" />}
        </div>
    );
};

const PageEditor = () => {
    const { pageName } = useParams();
    const [blocks, setBlocks] = useState([]);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        setBlocks(mockPages[pageName] || []);
    }, [pageName]);

    const moveBlock = (from, to) => {
        setBlocks((prev) => {
            const newBlocks = [...prev];
            const [movedBlock] = newBlocks.splice(from, 1);
            newBlocks.splice(to, 0, movedBlock);
            return newBlocks;
        });
    };

    const updateContent = (index, newContent) => {
        setBlocks((prev) => {
            const updated = [...prev];
            updated[index].content = newContent;
            return updated;
        });
    };

    const savePage = () => {
        console.log("Saving to backend:", blocks);
        alert("Page saved successfully!");
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="p-4 max-w-2xl mx-auto">
                <div className="flex justify-between mb-4">
                    <h2 className="text-xl font-bold">{isEditing ? `Edit ${pageName} Page` : `${pageName} Page`}</h2>
                    <button className="p-2 bg-blue-500 text-white" onClick={() => setIsEditing(!isEditing)}>
                        {isEditing ? "View Mode" : "Edit Mode"}
                    </button>
                </div>
                {blocks.map((block, index) => (
                    <Block key={block.id} block={block} index={index} moveBlock={moveBlock} updateContent={updateContent} isEditing={isEditing} />
                ))}
                {isEditing && <button className="mt-4 p-2 bg-green-500 text-white" onClick={savePage}>Save Page</button>}
            </div>
        </DndProvider>
    );
};

export default PageEditor;
