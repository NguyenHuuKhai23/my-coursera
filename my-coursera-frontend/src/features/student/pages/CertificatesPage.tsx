import type { Certificate } from "@/types";
import { CertificateCard } from "@/components/common";
import {EmptyState} from "@/components/common/index.js";
import {Award} from "lucide-react";

export default function CertificatesPage() {
    // Mock data
    const certificates: Certificate[] = [
        { id: 1, userId: 5, courseId: 1, enrollmentId: 1, certificateCode: "CERT-SB-20250220-001", fileUrl: "#", issuedAt: "2025-02-20T18:00:00", courseName: "Spring Boot từ Zero đến Hero" },
        { id: 2, userId: 6, courseId: 7, enrollmentId: 5, certificateCode: "CERT-PY-20250219-002", fileUrl: "#", issuedAt: "2025-02-19T15:00:00", courseName: "Python cho Data Science" },
    ];

    const handleDownload = (_cert: Certificate) => {};

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Chứng chỉ</h1>
                <p className="text-gray-500">Các chứng chỉ bạn đã đạt được</p>
            </div>

            {certificates.length > 0 ? (
                <div className="space-y-4">
                    {certificates.map((cert) => (
                        <CertificateCard key={cert.id} certificate={cert} onDownload={handleDownload} />
                    ))}
                </div>
            ) : (
                <EmptyState
                    icon={<Award size={64} className="text-gray-200" />}
                    title="Chưa có chứng chỉ"
                    description="Hoàn thành 100% một khoá học để nhận chứng chỉ."
                />
            )}
        </div>
    );
}

