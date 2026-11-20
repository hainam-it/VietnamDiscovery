import React from 'react';
import { Phone, Mail, User, Users, Compass, MapPin, Sparkles, ShieldCheck, Clock, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ 
      background: '#07341F', 
      color: '#CBD5E1',
      padding: '4.5rem 0 2rem 0',
      borderTop: '3px solid var(--brand-red)',
      marginTop: 'auto',
      fontFamily: 'var(--font-body)'
    }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
          gap: '2.5rem',
          paddingBottom: '3.5rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem' }}>
              <img 
                src="/assets/branding/logo-dark.svg" 
                alt="VietnamDiscovery Logo" 
                style={{ 
                  width: '170px', 
                  height: 'auto', 
                  objectFit: 'contain',
                  flexShrink: 0
                }} 
              />
            </div>

            <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: '#94A3B8', marginBottom: '0.9rem' }}>
              VietnamDiscovery – nền tảng khám phá du lịch Việt Nam, hỗ trợ người dùng tìm kiếm địa điểm, khám phá văn hóa và trải nghiệm những điểm đến nổi bật trên khắp Việt Nam.
            </p>
            <p style={{ fontSize: '0.8rem', fontStyle: 'italic', color: '#FFC928', marginBottom: '1.25rem', fontWeight: 600 }}>
              "Khám phá Việt Nam – Trọn vẹn hành trình"
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#FEF08A', fontSize: '0.825rem', fontWeight: 600 }}>
              <ShieldCheck size={16} color="#FBBF24" />
              <span>Hệ thống thông tin du lịch chính thống & bảo mật</span>
            </div>
          </div>

          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.05rem', fontWeight: 800, marginBottom: '1.25rem', position: 'relative', paddingBottom: '0.5rem' }}>
              Khám Phá Vùng Miền
              <span style={{ position: 'absolute', bottom: 0, left: 0, width: '30px', height: '2px', background: 'var(--brand-red)' }} />
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.9rem' }}>
              <li>
                <Link to="/provinces?region=bac" style={{ color: '#CBD5E1', transition: 'color 0.2s ease' }} onMouseEnter={e => e.currentTarget.style.color = '#FEF08A'} onMouseLeave={e => e.currentTarget.style.color = '#CBD5E1'}>
                  • Du lịch Miền Bắc (Hà Nội, Sa Pa, Hạ Long, Ninh Bình)
                </Link>
              </li>
              <li>
                <Link to="/provinces?region=trung" style={{ color: '#CBD5E1', transition: 'color 0.2s ease' }} onMouseEnter={e => e.currentTarget.style.color = '#FEF08A'} onMouseLeave={e => e.currentTarget.style.color = '#CBD5E1'}>
                  • Du lịch Miền Trung (Đà Nẵng, Hội An, Huế, Nha Trang)
                </Link>
              </li>
              <li>
                <Link to="/provinces?region=taynguyen" style={{ color: '#CBD5E1', transition: 'color 0.2s ease' }} onMouseEnter={e => e.currentTarget.style.color = '#FEF08A'} onMouseLeave={e => e.currentTarget.style.color = '#CBD5E1'}>
                  • Du lịch Tây Nguyên (Đà Lạt, Buôn Ma Thuột, Kon Tum)
                </Link>
              </li>
              <li>
                <Link to="/provinces?region=nam" style={{ color: '#CBD5E1', transition: 'color 0.2s ease' }} onMouseEnter={e => e.currentTarget.style.color = '#FEF08A'} onMouseLeave={e => e.currentTarget.style.color = '#CBD5E1'}>
                  • Du lịch Miền Nam (TP. Hồ Chí Minh, Vũng Tàu, Tây Ninh)
                </Link>
              </li>
              <li>
                <Link to="/provinces?region=tay" style={{ color: '#CBD5E1', transition: 'color 0.2s ease' }} onMouseEnter={e => e.currentTarget.style.color = '#FEF08A'} onMouseLeave={e => e.currentTarget.style.color = '#CBD5E1'}>
                  • Du lịch Miền Tây sông nước & Phú Quốc
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.05rem', fontWeight: 800, marginBottom: '1.25rem', position: 'relative', paddingBottom: '0.5rem' }}>
              Tiện Ích & Dịch Vụ
              <span style={{ position: 'absolute', bottom: 0, left: 0, width: '30px', height: '2px', background: 'var(--brand-red)' }} />
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.9rem' }}>
              <li>
                <Link to="/planner" style={{ color: '#FDE047', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Sparkles size={14} color="#FBBF24" /> Lập Lịch Trình AI
                </Link>
              </li>
              <li>
                <Link to="/provinces" style={{ color: '#CBD5E1' }}>
                  • Tra cứu bản đồ 63 & 34 tỉnh thành
                </Link>
              </li>
              <li>
                <Link to="/profile" style={{ color: '#CBD5E1' }}>
                  • Quản lý thông tin & Điểm đến đã lưu
                </Link>
              </li>
              <li>
                <span style={{ color: '#94A3B8' }}>
                  • Kiểm duyệt bài đăng cộng đồng
                </span>
              </li>
              <li>
                <span style={{ color: '#94A3B8' }}>
                  • Hỗ trợ trò chuyện trực tuyến 24/7
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1.05rem', fontWeight: 800, marginBottom: '1.25rem', position: 'relative', paddingBottom: '0.5rem' }}>
              Chăm Sóc Khách Hàng
              <span style={{ position: 'absolute', bottom: 0, left: 0, width: '30px', height: '2px', background: 'var(--brand-red)' }} />
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <Phone size={18} color="var(--brand-red)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ color: '#94A3B8', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 700 }}>Tổng đài tư vấn miễn phí</div>
                  <a href="tel:0973008720" aria-label="Gọi 0973008720" style={{ color: '#FFFFFF', textDecoration: 'none' }}>
                    <strong style={{ color: '#FFFFFF', fontSize: '1.1rem' }}>0973 008 720</strong>
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <Mail size={18} color="#38BDF8" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ color: '#94A3B8', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 700 }}>Email hỗ trợ</div>
                  <a href="mailto:hnam.nt1612@gmail.com" style={{ color: '#E2E8F0', wordBreak: 'break-all', textDecoration: 'none' }}>hnam.nt1612@gmail.com</a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <Clock size={18} color="#34D399" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ color: '#94A3B8', fontSize: '0.75rem', textTransform: 'uppercase', fontWeight: 700 }}>Thời gian phục vụ</div>
                  <span style={{ color: '#E2E8F0' }}>08:00 - 21:00 (Hàng ngày, kể cả ngày Lễ)</span>
                </div>
              </div>

              <div style={{ marginTop: '0.65rem', paddingTop: '0.65rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#94A3B8', fontSize: '0.85rem', marginBottom: '0.35rem' }}>
                  <User size={15} color="#38BDF8" />
                  <span>Phát triển bởi: <strong style={{ color: '#FFFFFF' }}>Nguyễn Trọng Hải Nam</strong> <span style={{ color: '#94A3B8' }}>(Project Developer)</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ 
          paddingTop: '2rem', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          flexWrap: 'wrap', 
          gap: '1rem',
          fontSize: '0.825rem',
          color: '#64748B'
        }}>
          <div>
            © 2026 <strong>Vietnam Discovery</strong>. Phát triển bởi Nguyễn Trọng Hải Nam. Tất cả các quyền được bảo lưu.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span>Điều khoản sử dụng</span>
            <span>Chính sách bảo mật</span>
            <span>Quy chế hoạt động</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
