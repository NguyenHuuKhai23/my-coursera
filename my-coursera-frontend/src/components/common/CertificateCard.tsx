import type { Certificate } from "@/types";
import { Award, Download } from "lucide-react";
import Button from "./Button";

interface CertificateCardProps {
    certificate: Certificate;
    onDownload?: (certificate: Certificate) => void;
}

export default function CertificateCard({ certificate, onDownload }: CertificateCardProps) {
    return (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="shrink-0 w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center">
                    <Award className="text-yellow-600" size={28} />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 line-clamp-2">
                        {certificate.courseName || `Khoá học #${certificate.courseId}`}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                        Mã: <span className="font-mono text-xs">{certificate.certificateCode}</span>
                    </p>
                    <p className="text-sm text-gray-500">
                        Cấp ngày: {new Date(certificate.issuedAt).toLocaleDateString("vi-VN")}
                    </p>
                </div>

                {/* Download */}
                {certificate.fileUrl && onDownload && (
                    <Button
                        variant="outline"
                        size="sm"
                        leftIcon={<Download size={14} />}
                        onClick={() => onDownload(certificate)}
                    >
                        Tải về
                    </Button>
                )}
            </div>
        </div>
    );
}

