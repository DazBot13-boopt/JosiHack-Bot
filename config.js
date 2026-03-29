module.exports = {
    // Array of emojis the bot will randomly choose from to react to statuses
    reactionEmojis: ["🩷", "❤️", "💙", "🖤", "❤️", "🔥", "🤍", "💞", "💕", "💓", "💝", "❤️", "🔥", "🫶", "🙌", "🌚", "🙂", "↔️", "🫶🏼", "👀", "🥺", "😎", "🤩"],

    // Optional auto-reply message sent to the user when a status is reacted to.
    // Set to empty string "" to disable auto-reply.
    autoReplyMessage: "",

    // Set to true to automatically like your own posted statuses
    likeMyOwnStatus: true,

    // If whitelist is not empty, the bot will ONLY react to statuses from these numbers.
    // Format must be: "COUNTRY_CODE_NUMBER@s.whatsapp.net"
    // e.g., ["1234567890@s.whatsapp.net"]
    whitelist: [],

    // If blacklist is not empty, the bot will IGNORE statuses from these numbers.
    // Format must be exactly like whitelist items.
    blacklist: [],

    // Set to true to use Pairing Code instead of QR code for login
    usePairingCode: true,

    // Provide your phone number if using pairing code (e.g., "1234567890")
    // Include the country code but no '+' sign or spaces.
    phoneNumber: "22955724800",

    // Supabase credentials for remote auth state storage
    supabaseUrl: "https://oglsnvlgmahtuhnrtfet.supabase.co",
    supabaseKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9nbHNudmxnbWFodHVobnJ0ZmV0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ3NDE5MDIsImV4cCI6MjA5MDMxNzkwMn0.zcxmKOWpsxu6-lh1C3DbKP2B-4tW7qqBIy_sHXQmocM"
};
