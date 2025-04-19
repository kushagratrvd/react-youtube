import React, { useState, useEffect } from "react";
import appwriteService from "../appwrite/config"
import { Link } from "react-router-dom";

function PostCard({$id, title, featuredImage}) {
    const [imgSrc, setImgSrc] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (featuredImage) {
            try {
                const url = appwriteService.getFilePreview(featuredImage);
                console.log("Image URL generated:", url);
                setImgSrc(url);
            } catch (e) {
                console.error("Error loading image:", e);
                setError(true);
            }
        }
        setLoading(false);
    }, [featuredImage]);

    return (
        <Link to={`/post/${$id}`}>
            <div className="w-full bg-gray-100 rounded-xl p-4">
                <div className="w-full justify-center mb-4">
                    {loading ? (
                        <div className="animate-pulse bg-gray-200 h-48 rounded-xl"/>
                    ) : error ? (
                        <div className="h-48 rounded-xl bg-gray-200 flex items-center justify-center">
                            <span className="text-gray-500">Image not available</span>
                        </div>
                    ) : (
                        <img 
                            src={imgSrc} 
                            alt={title}
                            className="rounded-xl w-full h-48 object-cover"
                            onError={(e) => {
                                console.error("Image load error");
                                setError(true);
                            }}
                        />
                    )}
                </div>
                <h2 className="text-xl font-bold">{title}</h2>
            </div>
        </Link>
    );
}

export default PostCard
