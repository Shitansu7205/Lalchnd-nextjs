export function getStoreEmailRecipients() {
    const recipients = (process.env.STORE_EMAIL || "")
        .split(",")
        .map((email) => email.trim())
        .filter(Boolean);

    if (recipients.length === 0) {
        throw new Error("STORE_EMAIL must contain at least one recipient");
    }

    return recipients;
}
