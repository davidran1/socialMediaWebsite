import ChatModel from "../models/chatModel.js";

export const createChat = async (req, res) => {
  const { senderId, receiverId } = req.body;

  try {
    // בדיקה אם כבר קיימת שיחה
    const existingChat = await ChatModel.findOne({
      members: { $all: [senderId, receiverId] },
    });

    if (existingChat) return res.status(200).json(existingChat);

    // יצירת שיחה חדשה אם לא קיימת
    const newChat = new ChatModel({
      members: [senderId, receiverId],
    });

    const result = await newChat.save();
    res.status(200).json(result);
  } catch (err) {
    console.error("Error creating chat:", err);
    res.status(500).json({ message: err.message });
  }
};

export const userChats = async (req, res) => {
  try {
    const chat = await ChatModel.find({
      members: { $in: [req.params.userId] },
    });
    res.status(200).json(chat);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const findChat = async (req, res) => {
  try {
    const chat = await ChatModel.findOne({
      members: { $all: [req.params.firstId, req.params.secondId] },
    });
    res.status(200).json(chat);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
